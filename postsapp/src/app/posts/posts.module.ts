import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { PostsService } from '../core/posts.service';

@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [
    PostsService
  ]
})
export class PostsModule { }
