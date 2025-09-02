import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './feature/components/feature.component';


const routes: Routes = [
{ path: '', component: FeatureComponent },
{ path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) }
];


@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {}