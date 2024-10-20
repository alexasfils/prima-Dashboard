import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FirebaseService } from '../../services/firebase.service';

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

  dialogform:FormGroup

  constructor(private dialogRef: MatDialogRef<DialogCreateDataComponent>, private firebaseService: FirebaseService) { }
  
  ngOnInit(): void {
    this.dialogform = new FormGroup({
      no: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      weight: new FormControl(null, [Validators.required]),
      symbol: new FormControl(null, [Validators.required]),
    })
  }

  onSubmit() {
    console.log(this.dialogform)

    //
    this.firebaseService.insertElement({
      no: this.dialogform.value.no,
      name: this.dialogform.value.name,
      weight: this.dialogform.value.weight,
      symbol: this.dialogform.value.symbol,
      
    }
    ).subscribe(data => {
      console.log(data)
    })
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
