import { posts } from "./posts.data";
import { Post } from "./post.model";
import { Injectable } from "@angular/core";

@Injectable()
export class PostsService {
  private posts: Post[] = posts;

  getPosts() {
    return this.posts.slice();
  }

  togglePostLikeByID(id: number) {
    this.posts.find(p => p.id === id).isLiked = !this.posts.find(
      p => p.id === id
    ).isLiked;
  }
}
