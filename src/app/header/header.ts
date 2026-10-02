import { Component, HostListener, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../core/services/theme.service';

@Component({
  imports: [MatButtonModule, MatIconModule],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  public readonly mobileView = signal(window.innerWidth < 850);
  public readonly openMobileMenuSidebar = signal(false);
  private themeService = inject(ThemeService);
  protected readonly theme = this.themeService.theme;


  @HostListener('window:resize')
  protected updateMobileView(): void {
    this.mobileView.set(window.innerWidth < 850);
    if(this.mobileView()) return 
    this.openMobileMenuSidebar.set(false);
  }

  public downloadCV(): void {
    const link = document.createElement('a');

    link.href = 'assets/Sandesh Rao Udupi -Resume.pdf';
    link.download = 'Sandesh-Rao-CV.pdf';

    link.click();
  }

  public openMobileMenu(): void {
    this.openMobileMenuSidebar.update(value => !value);
  }

  public scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (this.openMobileMenuSidebar) this.openMobileMenuSidebar.update(value => !value);
    }
  }

  protected toggleTheme(){
    this.themeService.toggleTheme();
  }
}
