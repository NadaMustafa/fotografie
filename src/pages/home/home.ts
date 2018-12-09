import { PostsService } from "./../../app/services/posts/posts.service";
import { Post } from "../../app/services/posts/post.model";
import { Component } from "@angular/core";
import { IonicPage, ModalController, AlertController } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  posts: Post[];

  constructor(
    private postsService: PostsService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) {}

  ionViewWillEnter() {
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

  onLikeClick(id: number) {
    this.postsService.togglePostLike(id);
  }

  onCommentClick(id: number) {
    const prompt = this.alertCtrl.create({
      title: 'Add Comment',
      inputs: [
        {
          name: 'comment'
        },
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Comment',
          handler: data => {
            this.postsService.addComment(id, data.comment);
          }
        }
      ]
    });
    prompt.present();
  }
}
