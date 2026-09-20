import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips'

@Component({
  imports: [MatChipsModule],
  selector: 'app-banner',
  styleUrl: './banner.scss',
  templateUrl: './banner.html',
})
export class Banner {}
