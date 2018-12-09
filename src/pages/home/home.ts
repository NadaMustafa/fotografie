import { PostsService } from './../../app/services/posts/posts.service';
import { Post } from '../../app/services/posts/post.model';
import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  posts: Post[];
  
  constructor(private postsService: PostsService, private modalCtrl: ModalController){}
  
  ionViewWillEnter() {
    this.posts = this.postsService.getPosts();
  }

  showLikes(id: number) {
    const modal = this.modalCtrl.create('likes-page', { id: id });
    modal.present();
  }

  showComments(id:number) {
    const modal = this.modalCtrl.create('comments-page', { id: id });
    modal.present();
  }

  onLikeClick(id: number) {
    this.postsService.togglePostLikeByID(id);
  }
}
