import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Header } from './header/header';
import { PortfolioPage } from './portfolio-page/portfolio-page';

@Component({
  imports: [RouterOutlet, MatButtonModule, MatIconModule, Header, PortfolioPage],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-21-portfolio');

}
