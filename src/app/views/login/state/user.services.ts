import { Injectable } from '@angular/core';
import { Http, Headers ,RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class UserService {

    constructor(
       public http: Http
    ) {}

    loginUser(pData) {
        // return this.http.post("https://client:60621/login", pData)
            // .map(data => data.json());
           
    }

    headers() {
        let headers = new Headers({'Content-Type':'application/json'});
        return new RequestOptions({ headers: headers, withCredentials : true });   
    }
}

