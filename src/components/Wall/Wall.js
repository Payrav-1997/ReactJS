import React, { useState } from "react";
import Post from "../Post/Post";

const Wall = () => {
  const [posts, setPosts] = useState([
    {
      id: 2,
      author: {
        id: 1,
        avatar: "https://lms.openjs.io/logo_js.svg",
        name: "OpenJS",
      },
      content: "Ну как, вы справились с домашкой?",
      photo: null,
      hit: true,
      hidden: false,
      likes: 222,
      likedByMe: true,
      tags: ["deadline", "homework"],
      created: 1603774800,
    },
    {
      id: 1,
      author: {
        id: 1,
        avatar: "https://lms.openjs.io/logo_js.svg",
        name: "OpenJS",
      },
      content: null,
      photo: {
        url: "https://lms.openjs.io/openjs.jpg",
        alt: "openjs logo",
      },
      hit: true,
      hidden: true,
      likes: 10,
      likedByMe: true,
      created: 1603774800,
    },
  ]);

  const handlePostLike = (id) => {
    setPosts((prevState) =>
      prevState.map((o) => {
        if (o.id !== id) {
          return o;
        }

        const likedByMe = !o.likedByMe;
        const likes = likedByMe ? o.likes + 1 : o.likes - 1;
        return { ...o, likedByMe, likes };
      })
    );
  };

  const handlePostRemove = (id) => {
    setPosts((prevState) => prevState.filter((o) => o.id !== id));
  };

  const handlePostHide = (id) => {
    setPosts((prevState) =>
      prevState.map((o) => {
        if (o.id !== id) {
          return o;
        }
        return { ...o, hidden: true };
      })
    );
  };

  const handlePostShow = (id) => {
    setPosts((prevState) =>
      prevState.map((o) => {
        if (o.id !== id) {
          return o;
        }
        return { ...o, hidden: false };
      })
    );
  };

  return (
    <>
      <div>
        {posts.map((p) => (
          <Post
            key={p.id}
            post={p}
            onLike={handlePostLike}
            onRemove={handlePostRemove}
            onHide={handlePostHide}
            onShow={handlePostShow}
          />
        ))}
      </div>
    </>
  );
};

export default Wall;
