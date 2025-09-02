import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './components/feature.component';


@NgModule({
declarations: [FeatureComponent],
imports: [CommonModule],
exports: [FeatureComponent]
})
export class FeatureModule {}