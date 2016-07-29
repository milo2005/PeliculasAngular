import {Component} from "@angular/core";
import {MovieComponent} from "./movie.component";
import {Movie} from "../../shared/index";

@Component({
    templateUrl:"./app/movies/movie-list/movie-list.component.html",
    directives: [MovieComponent]
})
export class MovieListComponent{
    
    data:Movie[];
}