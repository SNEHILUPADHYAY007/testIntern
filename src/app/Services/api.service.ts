import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'; 

@Injectable()
export class apiService{
    constructor(private httpClient:HttpClient){}
    getComments():Observable<any>{ 
        return this.httpClient.get("http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students");
    }
    
    addstudentAPI(data):Observable<any>{
        const headers = new HttpHeaders({
            "Content-Type": "application/json",
          });
        return this.httpClient.post("http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students", data,{headers})
    }
    addstudentAPI1(data,id):Observable<any>{
        const headers =new HttpHeaders({
            "Content-Type": "application/json",
          });
        return this.httpClient.put(`http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students/${id}`, data,{headers})
    }
    deleteAPI(id):Observable<any>{
        return this.httpClient.delete(`http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students/${id}`)
    }

}