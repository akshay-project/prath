import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AkService {

  constructor(private http:HttpClient) { }
  getData(){
    // let url = "https://restcountries.eu/rest/v2/name/india";
    let url = "http://localhost:3000/read";
    return this.http.get(url);
  }
  deleteData(id){
    let url = `http://localhost:3000/delete/${id}`
    return this.http.get(url);
  }
  createData(user){
    let url = `http://localhost:3000/create/`
    return this.http.post(url, user);
  }
  updateData(user){
    let url = `http://localhost:3000/update/${user._id}`
    return this.http.put(url, user);
  }

}
