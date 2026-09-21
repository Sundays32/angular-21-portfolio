import { Component, HostListener, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [MatButtonModule, MatIconModule],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header implements OnInit{
  public mobileView: boolean = window.innerWidth < 850;
  public openMobileMenuSidebar: boolean = false;

  public ngOnInit(): void {

  }

  @HostListener('window:resize',['$event'])
  toggleMobileView(event:Event):void{
    this.mobileView = window.innerWidth < 850
  }



  public downloadCV():void{
    const link = document.createElement('a');

    link.href = 'assets/Sandesh Rao Udupi -Resume.pdf';
    link.download = 'Sandesh-Rao-CV.pdf';

    link.click();
  }

  public openMobileMenu():void{
    this.openMobileMenuSidebar = !this.openMobileMenuSidebar;
  }

  public scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if(this.openMobileMenuSidebar) this.openMobileMenuSidebar = !this.openMobileMenuSidebar
    }
  }
}
