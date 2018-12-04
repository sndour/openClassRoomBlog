import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostLIstItemComponent } from './post-list-item/post-list-item.component';
import { PostFormComponent } from './post-form/post-form.component';
import {RouterModule, Routes} from '@angular/router';
import {compareNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';
import { HeaderComponent } from './header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PostViewComponent } from './post-view/post-view.component';


const appRoutes: Routes = [
  {path: 'posts', component: PostViewComponent},
  {path: 'newPost', component: PostFormComponent},
  {path: '', redirectTo: 'posts', pathMatch: 'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostLIstItemComponent,
    PostFormComponent,
    HeaderComponent,
    PostViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
