import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, catchError, tap, throwError } from 'rxjs';
import { model_canvas } from '../interfaces/canvas-model.interface';
import { environment } from '../environments/environments';

const api_model_canvas = environment.api_model_canvas;

@Injectable({
  providedIn: 'root'
})
export class CanvasModelServiceService {

  private refresh = new Subject<void>();

  get reload(){
    return this.refresh;
  }

  constructor(private http:HttpClient) { }

  get_canvas_models():Observable<model_canvas[]>{
    return this.http.get<model_canvas[]>(api_model_canvas)
    .pipe(
      catchError(error=>{
        console.log(error);
        return throwError(error);
      })
    );
  }

  get_canvas_model(id:string):Observable<model_canvas>{
    return this.http.get<model_canvas>(api_model_canvas+"/"+id)
    .pipe(
      catchError(error=>{
        console.log(error);
        return throwError(error);
      })
    );
  }

  save_canvas_model(model:model_canvas):Observable<model_canvas>{
    return this.http.post<model_canvas>(api_model_canvas,model)
    .pipe(
      tap(()=>{
        this.refresh.next();
      }),
      catchError(error=>{
        console.log(error);
        return throwError(error);
      })
    );
  }

  update_canvas_model(model:model_canvas):Observable<model_canvas>{
    return this.http.put<model_canvas>(api_model_canvas+"/"+model.id,model)
    .pipe(
      tap(()=>{
        this.refresh.next();
      }),
      catchError(error=>{
        console.log(error);
        return throwError(error);
      })
    );
  }

  delete_canvas_model(id:String):Observable<{}>{
    return this.http.delete<{}>(api_model_canvas+"/"+id)
    .pipe(
      tap(()=>{
        this.refresh.next();
      }),
      catchError(error=>{
        console.log(error);
        return throwError(error);
      })
    );
  }

}
