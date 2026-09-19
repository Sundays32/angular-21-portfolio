import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  imports: [RouterOutlet, MatButtonModule, MatIconModule],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-21-portfolio');

  public downloadCV(){
    const link = document.createElement('a');

    link.href = 'assets/Sandesh Rao Udupi -Resume.pdf';
    link.download = 'Sandesh-Rao-CV.pdf';

    link.click();
  }
}
