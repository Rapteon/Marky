import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FileMap } from './FileMap';

@Injectable({
  providedIn: 'root'
})

export class FileProcessorService {
  private reader: FileReader;
  private fileMap: FileMap;
  public fileMapSubject: BehaviorSubject<FileMap>;

  constructor() {
    this.reader = new FileReader();
    this.fileMap = {} as FileMap;
    this.fileMapSubject = new BehaviorSubject(this.fileMap);
  }

  storeFile(file: File): void {
    this.reader.readAsText(file);
    this.reader.onload = () => {
      console.log(this.reader.result);
      this.fileMap.name = file.name;
      this.fileMap.content = this.reader.result as string;
      this.fileMapSubject.next(this.fileMap);
    }
  }

  createNewFile(): void {
    this.fileMap.name = 'untitled.md';
    this.fileMap.content = '';
    this.fileMapSubject.next(this.fileMap);
  }
}
