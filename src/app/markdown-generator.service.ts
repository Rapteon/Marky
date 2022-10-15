import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarkdownGeneratorService {
  markdownText: string;
  public markdownSubject: BehaviorSubject<string>;

  constructor() {
    this.markdownText = '';
    this.markdownSubject = new BehaviorSubject(this.markdownText);
  }

  public setMarkup(text: string, type: string): void {
    switch(type) {
      case 'link':
        if (text === '')
          this.markdownText = `[text](url)`
        else
          this.markdownText = `[${text}](${text})`;
        break;
      case 'image':
        if (text === '')
          this.markdownText = `![image-alt-text](url)`;
        else
          this.markdownText = `![image-alt-text](${text})`;
        break;
      case 'bold':
        if (text === '')
          this.markdownText = `**text**`;
        else
          this.markdownText = `**${text}**`;
        break;
      case 'italic':
        if (text === '')
          this.markdownText = `*text*`;
        else
          this.markdownText = `*${text}*`;
        break;
      case 'strikethrough':
        if (text === '')
          this.markdownText = `~text~`;
        else
          this.markdownText = `~${text}~`;
        break;
      case 'h1':
        if (text === '')
          this.markdownText = `# heading`;
        else
          this.markdownText = `# ${text}`;
        break;
      case 'h2':
        if (text === '')
          this.markdownText = `## heading`;
        else
          this.markdownText = `## ${text}`;
        break;
      case 'h3':
        if (text === '')
          this.markdownText = `### heading`;
        else
          this.markdownText = `### ${text}`;
        break;
      case 'h4':
        if (text === '')
          this.markdownText = `#### heading`;
        else
          this.markdownText = `#### ${text}`;
        break;
      case 'h5':
        if (text === '')
          this.markdownText = `##### heading`;
        else
          this.markdownText = `##### ${text}`;
        break;
      case 'h6':
        if (text === '')
          this.markdownText = `###### heading`;
        else
          this.markdownText = `###### ${text}`;
        break;
      case 'quote':
        if (text === '')
          this.markdownText = `> quote`;
        else
          this.markdownText = `> ${text}`;
        break;
      default:
        this.markdownText = text;
    }
    console.log(`Set markup to ${this.markdownText}`);
    this.markdownSubject.next(this.markdownText);
  }
}
