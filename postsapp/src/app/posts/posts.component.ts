import { Component, OnInit } from '@angular/core';
import { PostsService } from '../core/posts.service';
import { Post } from '../shared/models/post';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public gridView: GridDataResult;
  public posts: Post[];
  public skip = 0;
  public pageSize = 5;

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postService.getPosts().pipe().subscribe((posts: Post[]) => {
      this.posts = posts;
      this.loadItems();
    }
    );
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadItems();
  }

  private loadItems(): void {
    this.gridView = {
      data: this.posts.slice(this.skip, this.skip + this.pageSize),
      total: this.posts.length
    };
  }

}
