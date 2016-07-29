import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES,Router} from "@angular/router";

@Component({
    templateUrl:"./app/dashboard/dashboard.component.html",
    directives:[ROUTER_DIRECTIVES]
})
export class DashboardComponent{

    constructor(private router:Router){}

    selectProfile(index:number){
        if(index == 1){
            this.router.navigate(["login"]);
        }
    }
}