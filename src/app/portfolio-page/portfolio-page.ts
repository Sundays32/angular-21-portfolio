import { Component } from '@angular/core';
import { Banner } from '../banner/banner';
import { About } from '../about/about';
import { Technology } from '../technology/technology';
import { Experience } from '../experience/experience';
import { Education } from '../education/education';

@Component({
  imports: [Banner, About, Technology, Experience, Education],
  selector: 'app-portfolio-page',
  styleUrl: './portfolio-page.scss',
  templateUrl: './portfolio-page.html',
})
export class PortfolioPage {}
