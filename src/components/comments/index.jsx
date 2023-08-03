/* eslint-disable react/prop-types */
import { Container } from "./styles";
import { FiX } from "react-icons/fi";

export function Comments({ selectedTitle, comments, onClose }) {
  return (
    <Container>
      <main>
        <div>
          <h2>{selectedTitle}</h2>

          <button onClick={onClose}>
            <FiX />
          </button>
        </div>

        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>{comment.body}</li>
          ))}
        </ul>
      </main>
    </Container>
  );
}
