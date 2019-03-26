import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { 
    this.http = http;
  }

  saveUser(user: any): Observable<any>{
    const headers = new HttpHeaders({'Access-Control-Allow-Orgin': "*"});
    return this.http.post("http://localhost:8080/api/v1/registration",user,{headers:headers});
  }
}
