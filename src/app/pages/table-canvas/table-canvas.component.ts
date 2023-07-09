import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasModelServiceService } from 'src/app/services/canvas-model-service.service';
import { model_canvas } from 'src/app/interfaces/canvas-model.interface';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditCanvasComponent } from '../edit-canvas/edit-canvas.component';
import Swal from 'sweetalert2';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-table-canvas',
  standalone: true,
  imports: [CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule
  ],
  templateUrl: './table-canvas.component.html',
  styleUrls: ['./table-canvas.component.scss']
})
export class TableCanvasComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = ['id', 'segmento_mercado', 'propuesta_valor', 'acciones'];
  dataSource: MatTableDataSource<model_canvas>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public model_canvas:model_canvas[]=[];
  subscription: any;

  constructor(private model_canvas_service:CanvasModelServiceService,
     private router:Router,
     private dialog: MatDialog
     ){
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.model_canvas);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
      this.get_canvas_models();
      this.subscription = this.model_canvas_service.reload.subscribe(()=>{
        this.get_canvas_models();
      });
  }

  public get_canvas_models(){
    this.model_canvas_service.get_canvas_models().subscribe(res=>{
      if(res!=null){
        this.model_canvas = res;
        this.dataSource = new MatTableDataSource(this.model_canvas);
        console.log(res);
      }
    });
  }

  public navigateCanvasModel(id:string){
    this.router.navigate(['/watch-canvas/',id]);
  }

  public open_edit_canvas(data:model_canvas){
    this.dialog.open(EditCanvasComponent,{
      width:'60%',
      data:data
    });
  }

  public delete_canvas(id:string){
    Swal.fire({
      title: '¿Seguro que desea eliminar el registro?',
      text: "Será eliminado permanentemente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, deseo eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.model_canvas_service.delete_canvas_model(id).subscribe(res=>{
        });
        Swal.fire(
          'Eliminado!',
          'Se ha eliminado el registro.',
          'success'
        )
      }
    })
  }

}


function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  };
}