import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-technology',
  styleUrl: './technology.scss',
  templateUrl: './technology.html',
})
export class Technology {
  public skills:any = [
    {id:1, name: 'Angular', imgUrl: 'assets/angular.svg'},
    {id:2, name: 'HTML', imgUrl: 'assets/html.svg'},
    {id:3, name: 'CSS', imgUrl: 'assets/css.svg'},
    {id:4, name: 'TypeScript', imgUrl: 'assets/typescript.svg'},
    {id:5, name: 'RxJS', imgUrl: 'assets/rxjs.svg'},
    {id:6, name: 'Tailwind CSS', imgUrl: 'assets/tailwind.svg'},
    {id:7, name: 'SASS', imgUrl: 'assets/sass.svg'},
    {id:8, name: 'Cypress', imgUrl: 'assets/cypress.svg'},
    {id:9, name: 'Git', imgUrl: 'assets/git.svg'},
    {id:10, name: 'GitHub', imgUrl: 'assets/github_Black.svg'},
    {id:11, name: 'VS Code', imgUrl: 'assets/vscode.svg'},
    {id:12, name: 'Claude', imgUrl: 'assets/claude.svg'},
    {id:13, name: 'ChatGPT', imgUrl: 'assets/chatgpt.svg'},
    {id:14, name: 'Python 3', imgUrl: 'assets/python.svg'},
  ]
}
