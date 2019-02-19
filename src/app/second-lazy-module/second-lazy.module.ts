import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SecondLazyComponent} from './second-lazy/second-lazy.component';


const routes: Routes = [
  {path: '', component: SecondLazyComponent, pathMatch: 'full'}
];


@NgModule({
  declarations: [
    SecondLazyComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class SecondLazyModule { }
