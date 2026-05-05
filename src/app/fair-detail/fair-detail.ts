import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fair-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fair-detail.html',
  styleUrl: './fair-detail.css'
})
export class FairDetailComponent {
  @Input() fair: any;
  @Output() onClose = new EventEmitter<void>();

  getEmailHref(email: string | null | undefined): string | null {
    const cleanEmail = (email ?? '').trim();
    return this.isEmail(cleanEmail) ? `mailto:${cleanEmail}` : null;
  }

  getWebLink(): { href: string; label: string } | null {
    const candidates = [this.fair?.web, this.fair?.email];

    for (const value of candidates) {
      const normalized = this.normalizeWebValue(value);
      if (normalized) {
        return normalized;
      }
    }

    return null;
  }

  close() {
    this.onClose.emit();
  }

  private normalizeWebValue(value: string | null | undefined): { href: string; label: string } | null {
    const raw = (value ?? '').trim();
    if (!raw) {
      return null;
    }

    const firstCandidate = raw.split(/\s+\/\s+|,\s*|;\s*/)[0].trim();
    if (!firstCandidate) {
      return null;
    }

    if (this.isEmail(firstCandidate)) {
      return { href: `mailto:${firstCandidate}`, label: firstCandidate };
    }

    const fixedProtocol = firstCandidate.replace(/^htpps:\/\//i, 'https://');
    if (/^[a-z][a-z0-9+.-]*:\/\//i.test(fixedProtocol)) {
      return { href: fixedProtocol, label: firstCandidate };
    }

    if (this.looksLikeDomain(fixedProtocol)) {
      return { href: `https://${fixedProtocol}`, label: firstCandidate };
    }

    return null;
  }

  private isEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  private looksLikeDomain(value: string): boolean {
    return /^(?:www\.)?[a-z0-9.-]+\.[a-z]{2,}(?:[/:?#].*)?$/i.test(value);
  }
}
