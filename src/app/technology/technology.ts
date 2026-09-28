import { Component, inject } from '@angular/core';
import { SkillsService } from '../core/services/skills.service';

@Component({
  imports: [],
  selector: 'app-technology',
  styleUrl: './technology.scss',
  templateUrl: './technology.html',
})
export class Technology {

  public readonly skillsService = inject(SkillsService);
  public readonly skills = this.skillsService.getSkillsList();
}
