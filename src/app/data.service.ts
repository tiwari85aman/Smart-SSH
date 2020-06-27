import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  private service_url = "http://localhost:5000/ssh"

  public getData(endpoint) {
    var url = this.service_url + endpoint
    return this.http.get(url);
  }

  public postData(endpoint, data) {
    var url = this.service_url + endpoint
    return this.http.post(url,data);
  }
}
