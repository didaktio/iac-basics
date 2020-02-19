import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {

    isLoggedIn: boolean;

    constructor(){
        if(true) this.isLoggedIn = true;
    }
}