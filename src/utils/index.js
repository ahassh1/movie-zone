// export const getFavorites = () => {
//   const favorites = localStorage.getItem("favorites");
//   if (favorites) return JSON.parse(favorites);
//   return [];
// };

// export const addFavorite = (movie) => {
//   const favorites = getFavorites();
//   const isExist = favorites.find((p) => p.id === movie.id);
//   if (isExist) return console.log("movie already added");
//   favorites.push(movie);
//   //   console.log(phone);
//   localStorage.setItem("favorites", JSON.stringify(movie));
// };

export const getFavorite = () => {
  let favoriteData = [];

  const favorite = localStorage.getItem("favorite");
  if (favorite) {
    favoriteData = JSON.parse(favorite);
  }
  console.log(favoriteData);
  return favoriteData;
};
export const addFavorite = (movie) => {
  const favorite = getFavorite();
  const isExist = favorite.find((p) => p.id === movie.id);
  if (isExist) {
    console.log("movie already added");
    return favorite;
  }

  favorite.push(movie);

  localStorage.setItem("favorite", JSON.stringify(favorite));
  return favorite;
};
