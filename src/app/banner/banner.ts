import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips'
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [MatChipsModule, MatIconModule, MatButtonModule],
  selector: 'app-banner',
  styleUrl: './banner.scss',
  templateUrl: './banner.html',
})
export class Banner {

  public emailMe():void{
    const recipient = 'sandeshrao2000@gmail.com';
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}`;
    
    // Opens Gmail compose page in a new browser tab
    window.open(url, '_blank');
  }
}
