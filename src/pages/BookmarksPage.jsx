import { useState, useEffect } from "react";
import { fetchBookmarks } from "../api";
import { AddBookmarkForm } from "../components/AddBookmarkForm";

export function BookmarksPage() {
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchBookmarks();
        setBookmarks(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  function handleAdd(newBookmark) {
    setBookmarks((prev) => [newBookmark, ...prev]);
  }

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Failed to load: {error}</p>;

  return (
    <>
      <AddBookmarkForm onAdd={handleAdd} />
      {bookmarks.map((book) => (
        <p key={book.id}>{book.title}</p>
      ))}
    </>
  );
}
