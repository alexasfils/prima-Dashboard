import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreateDataComponent } from '../dialog-create-data/dialog-create-data.component';

@Component({
  selector: 'app-dialogbutton',
  templateUrl: './dialogbutton.component.html',
  styleUrl: './dialogbutton.component.css',
})
export class DialogbuttonComponent {
  constructor(private dialog: MatDialog) { }
  

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogCreateDataComponent, {
      width: '400px',
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     console.log('Persona aggiunta:', result);
    //     // Qui puoi gestire la logica per aggiungere la persona alla tabella
    //   }
    // });
  }
}
