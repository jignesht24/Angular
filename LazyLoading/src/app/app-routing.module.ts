import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { FeatureModuleExampleModule } from './feature-module-example/feature-module-example.module';

const routes: Routes = [
  {
    path: 'demo',
    //loadChildren: './feature-module-example/feature-module-example.module#FeatureModuleExampleModule',
    loadChildren: () => import('./feature-module-example/feature-module-example.module').then(m => m.FeatureModuleExampleModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
