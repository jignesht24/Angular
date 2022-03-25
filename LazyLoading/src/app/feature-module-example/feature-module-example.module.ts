import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { FeatureModuleExampleRoutingModule } from './feature-module-example-routing.module';

@NgModule({
  declarations: [DemoComponentComponent],
  imports: [
    CommonModule,
    FeatureModuleExampleRoutingModule
  ]
})
export class FeatureModuleExampleModule { }
