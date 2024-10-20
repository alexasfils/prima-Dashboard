import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrl: './pagina1.component.css'
})
  
export class Pagina1Component implements OnInit{
displayedColumns: string[] = ['no', 'name', 'weight', 'symbol', 'buttons'];
   dataSource = new MatTableDataSource<any>([]);
constructor(private firebaseService: FirebaseService){}

  ngOnInit(): void {

    this.firebaseService.getElements()
      .subscribe((data: any) => {
        console.log(data)
       const elementi  = Object.keys(data).map((key) => {
          data[key]['id'] = key
          return {id: key, ...data[key]}
       })
        this.dataSource.data = elementi; // Impostiamo i dati recuperati nel DataSource
        console.log(this.dataSource.data)
    })
  }
  
 onUpdate(): void {
    console.log('Updating element:');
    // Qui puoi aprire un dialog per modificare i dettagli della riga
  }

  onDelete(): void {
    console.log('Deleting element:');
    // Logica per cancellare l'elemento (per esempio rimuoverlo da dataSource)
    // this.dataSource.data = this.dataSource.data.filter(el => el.position !== element.position);
  }
}


