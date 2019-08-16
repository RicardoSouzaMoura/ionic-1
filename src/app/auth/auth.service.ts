import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private http: HttpClient){

    }

    signIn(){
        this.http.get<String>('http://127.0.0.1:8080/checkLogged').subscribe(
            (sucesso)=>{
                console.log(sucesso);
            },
            (error)=>{
                console.log(error);
                if (error.status === 401) {
                    setTimeout(() => window.location.replace('http://127.0.0.1:8080/secure'), 4000);
                }
            }
        );
    }
}