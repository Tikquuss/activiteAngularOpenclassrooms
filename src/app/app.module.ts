import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { FormsModule } from '@angular/forms';
import { NewPostComponent } from './new-post/new-post.component';
import { HeaderComponent } from './header/header.component';
import { PostService } from './services/post.service';

import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { PostViewComponent } from './post-view/post-view.component';

const appRoutes: Routes = [
  { path: 'posts', component:PostViewComponent},
  { path: 'new', component: NewPostComponent },  
  { path: '', component: PostViewComponent },
  { path: '**', component: FourOhFourComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
    HeaderComponent,
    FourOhFourComponent,
    PostViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Pour la gestion des formulaires
    RouterModule.forRoot(appRoutes), // pour la gestion des routes
    ReactiveFormsModule 
  ],
  providers: [PostService], // Sans oublier le service 
  bootstrap: [AppComponent]
})

export class AppModule { }
