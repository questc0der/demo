import { useState } from "react";

export function AddBookmarkForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() == "" || url.trim() == "") {
      return;
    }
    onAdd({ id: Date.now(), title, url, note: "" });
    setTitle("");
    setUrl("");
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
    </>
  );
}
