import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './@core/guards/auth-guard';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  {
    path: '', 
    canActivate: [AuthGuard],
    children: [
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
      { path: 'my-profile', loadChildren: () => import('./my-profile/my-profile.module').then(m => m.MyProfilePageModule) },
      { path: 'faq', loadChildren: () => import('./faq/faq.module').then(m => m.FAQPageModule) },
    ],
  },
  { path: 'learn-more', loadChildren: () => import('./learn-more/learn-more.module').then(m => m.LearnMorePageModule) },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
