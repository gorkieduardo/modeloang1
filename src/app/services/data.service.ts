import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');

   // //Este codigo es para ver los datos como objeto
   // .pipe(
    //  tap(console.log));
    //// pendiente: http://culturaeko.com/wp-json/wp/v2/posts
  }
}

