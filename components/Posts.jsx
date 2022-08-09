import React from "react";
import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: "1",
      ussername: "codewithdahand",
      userImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi91OcFKm0GzESScMVJOlhpl9aObXs3Ah55y3oByW-v1EsIr1qHr592kSzJEP_unVvrGU&usqp=CAU",
      img: "https://images.unsplash.com/photo-1612279641482-cbe92afec55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3BsYXNoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      caption: "Thanks for your Picture",
    },
    {
      id: "2",
      ussername: "danieljude",
      userImg: "https://i.pravatar.cc/150?img=3",
      img: "https://images.unsplash.com/photo-1481314673535-d26604db8492?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3BsYXNoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      caption: "new picture from my photo gallery",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          userImg={post.userImg}
          username={post.ussername}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
