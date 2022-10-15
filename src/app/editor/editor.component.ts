import { Component, OnInit } from '@angular/core';
import { MarkdownGeneratorService } from '../markdown-generator.service';
import { MarkdownProcessorService } from '../markdown-processor.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  inputText: string;
  placeholderText: string = "### What's Marky?\nIt's a markdown editor."
  selectedText: string;
  inputTextArea: HTMLTextAreaElement;

  constructor(
    public markdownProcessorService: MarkdownProcessorService,
    private markdownGeneratorService: MarkdownGeneratorService
  ) {
    this.inputText = '';
    this.selectedText = '';
    this.inputTextArea = {} as HTMLTextAreaElement;
  }

  ngOnInit(): void {
    this.inputTextArea = document.getElementById("markdown-input") as HTMLTextAreaElement;
    this.markdownGeneratorService.markdownSubject.subscribe((markdownText) => {
      this.insertMarkdown(markdownText);
    });
  }

  setSelectedText(): void {
    console.log(this.inputTextArea.value.substring(this.inputTextArea.selectionStart, this.inputTextArea.selectionEnd));
    this.selectedText = this.inputTextArea.value.substring(this.inputTextArea.selectionStart, this.inputTextArea.selectionEnd);
  }

  unsetSelectedText(): void {
    // If selectedText is not empty string, then unset.
    if (this.selectedText !== '') {
      this.selectedText = '';
    }
  }

  insertMarkdown(markdownText: string): void {
    let selectionStart: number = this.inputTextArea.selectionStart;
    let selectionEnd: number = this.inputTextArea.selectionEnd;

    this.inputTextArea.setRangeText(markdownText, selectionStart, selectionEnd);
    this.inputText = this.inputTextArea.value;
    this.inputTextArea.focus();
  }
}
