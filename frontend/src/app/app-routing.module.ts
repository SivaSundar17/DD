import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProdDetailsComponent } from './pages/prod-details/prod-details.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { BestProductDetailsComponent } from './pages/best-product-details/best-product-details.component';
import { GoogleAuthComponent } from './components/google-auth/google-auth.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'signin', component: LoginComponent },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'prodDetails', component: ProdDetailsComponent },
  { path: 'searchResults', component: SearchResultsComponent },
  {path:'best-product-details',component:BestProductDetailsComponent},
  {path:'',component: HomeComponent },
  {path:'gauth',component:GoogleAuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
