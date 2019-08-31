import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BestdestComponent } from './bestdest/bestdest.component';
import { FormsModule } from '@angular/forms';
import { DestinationService } from './services/destination.service';
import { DestinationViewComponent } from './destination-view/destination-view.component';
import { Routes, RouterModule } from '@angular/router';
import { FulldestComponent } from './fulldest/fulldest.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: 'destinations', component: DestinationViewComponent },
  { path: 'seeall', component: FulldestComponent },
  { path: '', component: DestinationViewComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    BestdestComponent,
    DestinationViewComponent,
    FulldestComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DestinationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
