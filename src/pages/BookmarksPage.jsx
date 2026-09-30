import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { AddBookmarkForm } from "../components/AddBookmarkForm";

export function BookmarksPage({ bookmarks, loading, error, handleAdd }) {
  const { favoriteIds, toggleFavorite } = useFavorites();
  return (
    <>
      <AddBookmarkForm onAdd={handleAdd} />
      {loading && <p>Loading ...</p>}
      {error && <p>Failed to load: {error}</p>}
      {!loading &&
        !error &&
        bookmarks.map((book) => (
          <React.Fragment key={book.id}>
            <Link key={book.id} to={`/bookmarks/${book.id}`}>
              {book.title}
            </Link>
            <button onClick={() => toggleFavorite(book.id)}>
              {favoriteIds.includes(book.id) ? "★" : "☆"}
            </button>
          </React.Fragment>
        ))}
    </>
  );
}
