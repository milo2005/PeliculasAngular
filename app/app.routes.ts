import {provideRouter, RouterConfig} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {NotFoundComponent} from "./notfound/notfound.component";

import {DashboardComponent} from "./dashboard/dashboard.component";


const routes:RouterConfig = [
    {path:"", redirectTo:"login", pathMatch:"full"},
    {path:"login", component:LoginComponent},
    {path:"**", component:NotFoundComponent}

];

export const appRouterProviders = [provideRouter(routes)];