import { Injectable } from '@angular/core';

interface FileMap {
  [name: string]: string;
  name: string;
  content: string;
};

@Injectable({
  providedIn: 'root'
})

export class FileProcessorService {
  private reader: FileReader;
  private fileContentMap: FileMap;

  constructor() {
    this.reader = new FileReader();
    this.fileContentMap = {} as FileMap;
  }

  storeFile(file: File): void {
    this.reader.readAsText(file);
    this.reader.onload = () => {
      console.log(this.reader.result);
      this.fileContentMap[file.name] = this.reader.result as string;
    }
  }
}
