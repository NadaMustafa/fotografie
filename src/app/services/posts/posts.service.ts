import { Post } from "./post.model";
import { Injectable } from "@angular/core";

@Injectable()
export class PostsService {
  private posts: Post[] = [
    {
      id: 1,
      date: new Date("04/12/2018 10:36 PM"),
      owner: {
        name: "Lianne Greene",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXSSNU4VHunj71XjHXCWiKFd5r1JM3yIdVw7GZHBLKs-G6vjXV"
      },
      image:
        "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=350",
      caption: "Plain Field in Front of Mountain Peak",
      location: "Iceland",
      likes: {
        number: 5,
        likers: [
          {
            name: "Chris Figueroa",
            avatar: "https://i.imgur.com/I80W1Q0.png"
          }
        ]
      },
      comments: {
        number: 1,
        commenters: [
          {
            name: "Steffan Nairn",
            avatar: "https://toparkservers.com/img/team/team-1.png",
            comment: "Wow Amazing!"
          }
        ]
      }
    }
  ];

  getPosts() {
    return this.posts.slice();
  }
}
