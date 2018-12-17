export const posts = [
    {
      id: 1,
      date: new Date("04/12/2018 10:36 PM"),
      isLiked: false,
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
        number: 2,
        likers: [
          {
            name: "Chris Figueroa",
            avatar: "https://i.imgur.com/I80W1Q0.png"
          },
          {
            name: "Bronwyn Mata",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5acPtUoRQbpJIMBE1p3juRrbDNYceqQyQj1lClTnC5E9Aa5sN"
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
    },
    {
      id: 2,
      date: new Date("06/3/2018 1:50 PM"),
      isLiked: true,
      owner: {
        name: "Rosanna Mahoney",
        avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCH8MZ8I4skXUWuOUVLQtS451YUpnlsulSQGWm14gswJgtKmBZ"
      },
      image: "https://croatia.hr/sites/default/files/styles/image_full_width/public/2017-08/02_01_slide_nature.jpg?itok=ItAHmLlp",
      caption: "Nature at its finest",
      location: "Croatia",
      likes: {
        number: 3,
        likers: [
          {
            name: "Stacey Rahman",
            avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-369-456321.png"
          },
          {
            name: "Zander Peacock",
            avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-367-456319.png"
          }
        ]
      },
      comments: {
        number: 1,
        commenters: [
          {
            name: "Steffan Nairn",
            avatar: "https://toparkservers.com/img/team/team-1.png",
            comment: "Adorable"
          }
        ]
      }
    },
    {
      id: 3,
      date: new Date("09/4/2017 3:06 AM"),
      isLiked: false,
      owner: {
        name: "Aron Cash",
        avatar:"data:image/jpeg;base64,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"
      },
      image: "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2017/11/ultimate-guide-outdoor-nature-photography-20.jpg?resize=750%2C500&ssl=1",
      caption: "Flowers",
      location: "",
      likes: {
        number: 0,
        likers: []
      },
      comments: {
        number: 0,
        commenters: []
      }
    }
  ]