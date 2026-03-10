import { Component, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
  ngAfterViewInit() {
    if (typeof document !== 'undefined') {
      const navbarToggler = document.getElementById('navbar-toggler');
      const navLinks = document.querySelectorAll('.nav-link');

      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (navbarToggler && navbarToggler.getAttribute('aria-expanded') === 'true') {
            navbarToggler.click();
          }
        });
      });
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (typeof document !== 'undefined') {
      const navbarToggler = document.getElementById('navbar-toggler');
      const navbarNav = document.getElementById('navbarNav');

      if (navbarToggler && navbarNav && navbarNav.classList.contains('show')) {
        const target = event.target as HTMLElement;
        if (!navbarToggler.contains(target) && !navbarNav.contains(target)) {
          navbarToggler.click();
        }
      }
    }
  }
}