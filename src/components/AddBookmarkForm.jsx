import { useState, useRef, useEffect } from "react";

export function AddBookmarkForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const titleInputRef = useRef(null);

  useEffect(() => {
    titleInputRef.current.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !url.trim()) {
      return;
    }
    onAdd({ id: Date.now(), title, url, note: "" });
    setTitle("");
    setUrl("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          ref={titleInputRef}
        />
        <input
          type="text"
          value={url}
          placeholder="https://..."
          onChange={(e) => setUrl(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
    </>
  );
}
