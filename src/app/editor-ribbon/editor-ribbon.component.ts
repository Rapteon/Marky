import { Component, EventEmitter, Input, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { MarkdownGeneratorService } from '../markdown-generator.service';

@Component({
  selector: 'app-editor-ribbon',
  templateUrl: './editor-ribbon.component.html',
  styleUrls: ['./editor-ribbon.component.css']
})

export class EditorRibbonComponent implements OnInit {
  headingRibbonIcon: string;
  viewingHeadingOptions: boolean;
  RIBBON_OPTION_DURATION: number = 5000; // In milliseconds
  @Input() selectedText: string = '';

  constructor(private markdownGeneratorService: MarkdownGeneratorService) {
    this.headingRibbonIcon = 'assets/images/heading.svg';
    this.viewingHeadingOptions = false;
  }

  ngOnInit(): void {
  }

  saveFile(): void {
    console.log('Save file');
  }

  insertLink(): void {
    console.log('Insert link');
    console.log(`Selected text: ${this.selectedText}`);
    this.markdownGeneratorService.setMarkup(this.selectedText, 'link');
  }

  insertImage(): void {
    console.log('Insert image');
    this.markdownGeneratorService.setMarkup(this.selectedText, 'image');
  }

  makeTextBold(): void {
    console.log('Make bold');
    this.markdownGeneratorService.setMarkup(this.selectedText, 'bold')
  }

  makeTextItalic(): void {
    console.log('Make italic');
    this.markdownGeneratorService.setMarkup(this.selectedText, 'italic')
  }

  makeTextStrikethrough(): void {
    console.log('Make strikethrough');
    this.markdownGeneratorService.setMarkup(this.selectedText, 'strikethrough')
  }

  toggleHeadingOptions(): void {
    console.log('Show heading options');
    this.viewingHeadingOptions = !this.viewingHeadingOptions;
  }

  addHeading(headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | string): void {
    switch (headingLevel) {
      case 'h1':
        console.log('Setting h1');
        this.markdownGeneratorService.setMarkup(this.selectedText, 'h1');
        break;
      case 'h2':
        console.log('Setting h2');
        this.markdownGeneratorService.setMarkup(this.selectedText, 'h2');
        break;
      case 'h3':
        console.log('Setting h3');
        this.markdownGeneratorService.setMarkup(this.selectedText, 'h3');
        break;
      case 'h4':
        console.log('Setting h4');
        this.markdownGeneratorService.setMarkup(this.selectedText, 'h4');
        break;
      case 'h5':
        console.log('Setting h5');
        this.markdownGeneratorService.setMarkup(this.selectedText, 'h5');
        break;
      case 'h6':
        console.log('Setting h6');
        this.markdownGeneratorService.setMarkup(this.selectedText, 'h6');
        break;
      default:
        console.log('Setting default h1');
        this.markdownGeneratorService.setMarkup(this.selectedText, 'h1');
    }
    this.viewingHeadingOptions = false;
  }

  addBlockQuote(): void {
    console.log('Add block quote');
    this.markdownGeneratorService.setMarkup(this.selectedText, 'quote')
  }

}
