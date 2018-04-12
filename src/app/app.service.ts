import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
    constructor(public http: Http) {
    }

    public getData() {
        return this.http.get('assets/review.json')
            .map((res: Response) => res.json());
    }

}
