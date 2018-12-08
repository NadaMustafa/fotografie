import { Post } from './../../app/services/posts/post.model';
import { PostsService } from "./../../app/services/posts/posts.service";
import { Component } from "@angular/core";
import { IonicPage, NavParams, ViewController } from "ionic-angular";

@IonicPage({
  name: "likes-page"
})
@Component({
  selector: "page-likes",
  templateUrl: "likes.html"
})
export class LikesPage {
  post: Post;
  constructor(
    private viewCtrl: ViewController,
    private navParams: NavParams,
    private postsService: PostsService
  ) {}

  ngOnInit() {
    let id = this.navParams.get('id');
    this.post = this.postsService.getPosts().find(p => p.id === id);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
