import { useParams, useNavigate } from "react-router-dom";
export function BookmarkDetail({ bookmarks, loading }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const bookmark = bookmarks.find((b) => b.id === Number(id));
  return (
    <>
      {loading && <p>Loading...</p>}
      {bookmark ? <p>{bookmark.title}</p> : <p>Bookmark not found</p>}
      <button onClick={() => navigate("/")}>Back</button>
    </>
  );
}
