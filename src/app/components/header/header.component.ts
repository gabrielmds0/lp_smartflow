import { CommonModule } from '@angular/common';
import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  @ViewChild('mobileMenu') mobileMenu!: ElementRef;
  @ViewChild('mobileMenuButton') mobileMenuButton!: ElementRef;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (
      this.mobileMenu &&
      this.mobileMenu.nativeElement &&
      !this.mobileMenu.nativeElement.contains(event.target) &&
      this.mobileMenuButton &&
      this.mobileMenuButton.nativeElement &&
      !this.mobileMenuButton.nativeElement.contains(event.target)
    ) {
      this.isMobileMenuOpen = false;
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth >= 768) {
      this.isMobileMenuOpen = false;
    }
  }
}