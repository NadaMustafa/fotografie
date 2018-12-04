import { PostsService } from './../../app/services/posts/posts.service';
import { Post } from '../../app/services/posts/post.model';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  posts: Post[];
  
  constructor(private postsService: PostsService){}
  
  ionViewWillEnter() {
    this.posts = this.postsService.getPosts();
  }
}
