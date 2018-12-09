import { User } from './../auth/user.model';
import { AuthService } from './../auth/auth.service';
import { posts } from "./posts.data";
import { Post } from "./post.model";
import { Injectable } from "@angular/core";

@Injectable()
export class PostsService {
  private posts: Post[] = posts;
  
  constructor(private authService: AuthService){}
  getPosts() {
    return this.posts.slice();
  }

  togglePostLike(id: number) {
    this.posts.find(p => p.id === id).isLiked = !this.posts.find(
      p => p.id === id
    ).isLiked;
  }

  addComment(id: number, comment: String) {
    const user: User = this.authService.getUser();
    this.posts.find(p => p.id === id).comments.commenters.push({
      name:user.name,
      avatar:user.avatar,
      comment: comment
    });
    (<number>this.posts.find(p => p.id === id).comments.number)++;
  }
}
