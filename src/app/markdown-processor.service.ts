import { Injectable } from '@angular/core';
import { marked } from 'marked';
import * as DOMPurify from 'dompurify';

@Injectable({
  providedIn: 'root'
})
export class MarkdownProcessorService {

  constructor() { }

  getHTML(markdownString: string) {
    return marked.parse(DOMPurify.sanitize(markdownString));
  }
}
