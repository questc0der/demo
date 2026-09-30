import { Link, Outlet } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
export function Layout() {
  const { favoriteIds, toggleFavorite } = useFavorites();
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
        <p>Favorites: {favoriteIds.length}</p>
      </nav>
      <Outlet />
    </>
  );
}
