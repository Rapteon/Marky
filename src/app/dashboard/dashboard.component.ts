import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileProcessorService } from '../file-processor.service';
import { MarkdownProcessorService } from '../markdown-processor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  fileInput: HTMLInputElement;

  constructor(
    public markdownProcessor: MarkdownProcessorService,
    private fileProcessor: FileProcessorService,
    private router: Router
  ) {
    this.fileInput = {} as HTMLInputElement;
  }

  ngOnInit(): void {
    this.fileInput = document.getElementById('file-input')! as HTMLInputElement;
    this.fileInput.addEventListener('change', () => {
      let files: FileList = this.fileInput.files!;
      this.fileProcessor.storeFile(files.item(0)!);
    })
  }

  loadFile(): void {
    this.fileInput.click();
  }

  createFile(): void {
    this.router.navigate(['editor']);
  }
}
