import { ModalController } from "ionic-angular";
import { PostsService } from "./../../app/services/posts/posts.service";
import { Post } from "./../../app/services/posts/post.model";
import { User } from "./../../app/services/auth/user.model";
import { AuthService } from "./../../app/services/auth/auth.service";
import { Component } from "@angular/core";
import { IonicPage } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-profile",
  templateUrl: "profile.html"
})
export class ProfilePage {
  user: User;
  posts: Post[];
  constructor(
    private authService: AuthService,
    private postsService: PostsService,
    private modalCtrl: ModalController
  ) {}

  ionViewWillLoad() {
    this.user = this.authService.getUser();
    this.posts = this.postsService.getPosts();
  }

  showLikes(id: number) {
    const modal = this.modalCtrl.create("likes-page", { id: id });
    modal.present();
  }

  showComments(id: number) {
    const modal = this.modalCtrl.create("comments-page", { id: id });
    modal.present();
  }
}
