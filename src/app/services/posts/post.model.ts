export class Post {
  id: Number;
  date: Date;
  owner: {
    name: String,
    avatar: String
  };
  image: String;
  caption: String;
  location: String;
  likes: {
    number: Number;
    likers: [
      {
        name: String;
        avatar: String;
      }
    ];
  };
  comments: {
    number: Number;
    commenters: [
      {
        name: String;
        avatar: String;
        comment: String;
      }
    ];
  };
}
