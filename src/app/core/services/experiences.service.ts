import { Injectable } from "@angular/core";
import { Experiences } from "../models/experience.model";

@Injectable({
    providedIn: 'root',
})

export class ExperienceService {

    private readonly experience: Experiences[] = [
        {
            id: 1,
            company: 'BixBytes Solutions',
            role: 'Software Engineer',
            startDate: 'May 2025',
            endDate: 'Present',
            location: 'Mangaluru',
            imgUrl: 'assets/BixB.jpeg',
            description: [],
            technologies: []
        },
        {
            id: 2,
            company: 'Accenture',
            role: 'Custom Software Engineering Analyst',
            startDate: 'Nov 2022',
            endDate: 'Apr 2025',
            location: 'Bengaluru',
            imgUrl: 'assets/Accenture.svg',
            description: [],
            technologies: []
        },
    ];

    public getExperiencesList(): readonly Experiences[] {
        return this.experience
    }
}