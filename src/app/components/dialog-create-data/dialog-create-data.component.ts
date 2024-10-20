import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-create-data',
  templateUrl: './dialog-create-data.component.html',
  styleUrl: './dialog-create-data.component.css'
})
export class DialogCreateDataComponent implements OnInit{

  id: number;
  name = '';
  weignh = '';
  symbol = '';

  constructor(private dialogRef: MatDialogRef<DialogCreateDataComponent>) { }
  
  ngOnInit(): void {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
