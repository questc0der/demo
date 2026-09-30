import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { BookmarksPage } from "./pages/BookmarksPage";
import { BookmarkDetail } from "./pages/BookmarkDetail";
import { fetchBookmarks } from "./api";
import { Layout } from "./components/Layout";
function App() {
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

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <BookmarksPage
                bookmarks={bookmarks}
                loading={loading}
                error={error}
                handleAdd={handleAdd}
              />
            }
          />
          <Route
            path="/bookmarks/:id"
            element={<BookmarkDetail bookmarks={bookmarks} loading={loading} />}
          />
          <Route path="/about" element={<p>About</p>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
