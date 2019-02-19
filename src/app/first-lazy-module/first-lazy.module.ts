import {NgModule} from '@angular/core';
import {FirstLazyComponent} from './first-lazy/first-lazy.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', component: FirstLazyComponent, pathMatch: 'full'}
];


@NgModule({
  declarations: [
    FirstLazyComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class FirstLazyModule { }
