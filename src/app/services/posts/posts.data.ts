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
    }
  ]