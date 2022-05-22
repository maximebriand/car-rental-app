import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthComponent} from "./auth/auth.component";

const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  },
  {
    path: '**',
    redirectTo: 'authentication',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, enableTracing: false})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
