import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { AboutUsPageModule } from './pages/about-us.page-module';
import { ContactPageModule } from './pages/contact.page-module';
import { FirstPersonPageModule } from './pages/first-person.page-module';

const routes: Routes = [{
  path: '',
  loadChildren: () => HomePageModule
},
{
  path: 'about-us',
  loadChildren: () => AboutUsPageModule
},
  { 
        path: 'contact', 
        loadChildren: () => ContactPageModule
      },
  { 
        path: 'first-person', 
        loadChildren: () => FirstPersonPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
