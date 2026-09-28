export interface Experiences {
    id: number;
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    location?: string;
    imgUrl: string;
    description: string[];
    technologies: string[]
}