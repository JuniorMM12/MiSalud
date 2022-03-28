import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaveDataService {

  public url = "https://my-health123.herokuapp.com/"


  constructor(private http: HttpClient) { }

  registrarUser(body):Observable<object>{
    return this.http.post(this.url, body);
  }
}
 