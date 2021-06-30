import { createContext, useState } from "react";

const FavoriteContent = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup)=>{},
  removeFavorite: (meetupId)=>{},
  isFavorite: (meetupId)=>{},
});

export function FavoriteContentProvider(props) {
  const [userFavorite, setUserFavorite] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorite((previousFavorite) => {
      return previousFavorite.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
      setUserFavorite((previousFavorite) => {
          return previousFavorite.filter(meetup => meetup.id !== meetupId)
      })
  };

  function isFavoriteHandler(meetupId) {
      return userFavorite.some(meetup=>meetup.id===meetupId);
  }

  const content = {
    favorites: userFavorite,
    totalFavorites: userFavorite.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    isFavorite: isFavoriteHandler
  };

  return (
    <FavoriteContent.Provider value={content}>
      {props.children}
    </FavoriteContent.Provider>
  );
}

export default FavoriteContent;
