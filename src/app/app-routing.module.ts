import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetComponent } from './components/planet.component';
import { OverviewComponent } from './components/overview.component';
import { InternalComponent } from './components/internal.component';
import { GeologyComponent } from './components/geology.component';

const routes: Routes = [
  { path: 'planets/:planet', title: 'Planets', component: PlanetComponent, children: [
    {
      path: 'overview',
      component: OverviewComponent,
    },
    {
      path: 'internal',
      component: InternalComponent,
    },
    {
      path: 'geology',
      component: GeologyComponent,
    },
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
