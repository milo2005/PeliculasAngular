import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    templateUrl:"./app/dashboard/dashboard.component.html",
    directives:[ROUTER_DIRECTIVES]
})
export class DashboardComponent{

    selectMenu(index:number){}
    selectProfile(index:number){}
}