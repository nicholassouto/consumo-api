import { Container } from "./styles";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

import { Comments } from "../../components/comments";

export function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedComments, setSelectedComments] = useState([]);
  const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false);
  const [readComments, setReadComments] = useState([]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    api.get("/api/posts-comments").then((response) => {
      setPosts(response.data);
    });
  }, []);

  function handlePostSelected(postId, postTitle, comments) {
    setSelectedPost(postId);
    setSelectedTitle(postTitle);
    setSelectedComments(comments);
    setIsCommentBoxOpen(true);
    setReadComments((prevReadComments) => ({ ...prevReadComments, [postId]: true }));
  }

  function handleCommentClose() {
    setIsCommentBoxOpen(false);
  }

  function handleDropdownChange(event) {
    const selectedPostId = event.target.value;
    const selectedPostData = posts.find((post) => post.id === parseInt(selectedPostId));
    if (selectedPostData) {
      handlePostSelected(selectedPostId, selectedPostData.title, selectedPostData.comments);
    }
  }

  return (
    <Container>
      <main>
        <h1>Selecione um post pelo id ou título abaixo ou numeração ao lado</h1>

        <section>
          <select value={selectedPost} onChange={handleDropdownChange}>
            {posts.map((post) => (
              <option key={post.id} value={post.id}>
                {`${post.id} - ${capitalizeFirstLetter(post.title)}`}
              </option>
            ))}
          </select>
        </section>

        {posts.map((post) => (
          <div key={post.id}>
            <h3
              onClick={() => handlePostSelected(post.id, post.title, post.comments)}
              className={
                isCommentBoxOpen && (selectedPost === post.id || selectedTitle === post.title)
                  ? "selected"
                  : readComments[post.id]
                  ? "read"
                  : ""
              }
            >
              {`${post.id} - ${capitalizeFirstLetter(post.title)}`}
            </h3>
          </div>
        ))}

        {isCommentBoxOpen && (
          <Comments
            selectedTitle={capitalizeFirstLetter(selectedTitle)}
            comments={selectedComments}
            onClose={handleCommentClose}
          />
        )}
      </main>

      <aside>
        <div>
          {posts.map((post) => (
            <section key={post.id}>
              <h3
                onClick={() => handlePostSelected(post.id, post.title, post.comments)}
                className={
                  isCommentBoxOpen && (selectedPost === post.id || selectedTitle === post.title)
                    ? "selected"
                    : readComments[post.id]
                    ? "read"
                    : ""
                }
              >
                {post.id}
              </h3>
            </section>
          ))}
        </div>
      </aside>
    </Container>
  );
}
