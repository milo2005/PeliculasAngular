import {AppUrls, Movie} from "./index";
import {Observable} from "rxjs/observable";
import {Http, Response} from "@angular/http";

import {Injectable} from '@angular/core';

@Injectable()
export class MovieService{
    
    constructor(private http:Http, private urls:AppUrls){}

    getMoviesByGenre(genre:number):Observable<Movie[]>{
        let url:string = this.urls.urlByMovieGenre(genre,"2016");
        return this.http.get(url).map(this.processResponse).catch(this.handleError);

    }

    processResponse(res:Response){
        let body = res.json();
        body = body.results;
        return body;
    }

    handleError(err:any){
        return Observable.throw(err);
    }



}