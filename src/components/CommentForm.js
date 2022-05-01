import { useState } from "react";

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  hasSeeAllButoon = false,
  handleSeeAll,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;

  function Hide() {
    var x = document.getElementById("my");
    x.style.display = "block";
  }

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
    Hide();
  };
  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="comment-form-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="comment-form-button" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      )}

      {hasSeeAllButoon && (
        <button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={handleSeeAll}
        >
          See All Comments
        </button>
      )}
    </form>
  );
};

export default CommentForm;
