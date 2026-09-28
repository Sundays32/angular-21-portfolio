import { Component, inject } from '@angular/core';
import { Experiences } from '../core/models/experience.model';
import { ExperienceService } from '../core/services/experiences.service';

@Component({
  imports: [],
  selector: 'app-experience',
  styleUrl: './experience.scss',
  templateUrl: './experience.html',
})
export class Experience {

  public readonly experienceService = inject(ExperienceService);
  public readonly experience: readonly Experiences[] = this.experienceService.getExperiencesList();
}
