import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './componets/email/email.component';
import { HomeComponent } from './componets/home/home.component';

const routes: Routes = [{


  path:"sendemail",
component:EmailComponent,
pathMatch:"full"
},
{
  path:'',
  component:HomeComponent,
  pathMatch:"full"
}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
