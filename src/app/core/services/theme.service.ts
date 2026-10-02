import { effect, Injectable, signal } from "@angular/core";

export type Theme = 'light' | 'dark';

@Injectable({
    providedIn:'root',
})

export class ThemeService{
    private readonly storageKey = 'portfolio-theme';
    readonly theme = signal<Theme>(this.getInitialTheme());

    constructor(){
        effect(()=>{
            const theme = this.theme();
            document.documentElement.dataset['theme'] = theme;
            localStorage.setItem(this.storageKey, theme);
        })
    }

    toggleTheme(){
        this.theme.update(value => value==='light'? 'dark' : 'light')
    }

    private getInitialTheme():Theme{
        const storedTheme = localStorage.getItem(this.storageKey);

        if (storedTheme === 'light' || storedTheme === 'dark') {
            return storedTheme;
        }

        return 'dark'
    }
}