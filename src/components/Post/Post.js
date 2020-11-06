import React from "react";
import Tags from "../Tags/Tags";
import "./Post.css";
function Post({ post, onLike, onRemove, onHide, onShow }) {
  const { author } = post;
  const { photo } = post;

  const handleLike = (evt) => {
    onLike(post.id);
  };

  const handleRemove = (evt) => {
    onRemove(post.id);
  };

  const handleHide = (evt) => {
    onHide(post.id);
  };

  const handleShow = (evt) => {
    onShow(post.id);
  };

  return (
    <article>
      <header>
        <img
          className="Post-avatar"
          src={author.avatar}
          alt={author.name}
          width="50"
          height="50"
        />
        <h5>{author.name}</h5>
        {post.hidden ? (
          <button onClick={handleShow}>показать</button>
        ) : (
          <>
            <button onClick={handleRemove}>удалить</button>
            <button onClick={handleHide}>скрыть</button>
          </>
        )}
        {!post.hidden && (
          <>
            <div>{post.created}</div>
            {post.hit && <span>HIT</span>}
          </>
        )}
      </header>
      {!post.hidden && (
        <>
          <div>
            <div className="Post-content">{post.content}</div>
            {photo && (
              <img src={photo.url} alt={photo.alt} className="Post-photo" />
            )}
          </div>
          <footer>
            <span className="Post-likes" onClick={handleLike}>
              {post.likedByMe ? (
                <img
                  src="https://lms.openjs.io/liked.svg"
                  alt="likes"
                  width="20"
                  height="20"
                />
              ) : (
                <img
                  src="https://lms.openjs.io/unliked.svg"
                  alt="unliked"
                  width="20"
                  height="20"
                />
              )}
              <span className="Post-likes-count">{post.likes}</span>
              {post.tags && <Tags tags={post.tags} />}
            </span>
          </footer>
        </>
      )}
    </article>
  );
}

export default Post;
