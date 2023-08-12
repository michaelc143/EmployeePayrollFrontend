import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Director } from '../director';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirectorServiceService {

  private directorsUrl: string;
  constructor(private http:HttpClient) {
    this.directorsUrl = 'http://localhost:8080/directors';
  }

  public findAll(): Observable<Director[]> {
    return this.http.get<Director[]>(this.directorsUrl);
  }

  public save(user: Director) {
    return this.http.post<Director>(this.directorsUrl, user);
  }

  public delete(id: number) { 
    return this.http.delete<Director>(this.directorsUrl+"/"+id);
  }

}
