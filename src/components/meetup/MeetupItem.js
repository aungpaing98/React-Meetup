// props:{id, image, title, address, description}
import { useContext } from "react";
import FavoriteContent from "../../store/favorite-contents";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

function MeetupItem(props) {
  const favoriteCtx = useContext(FavoriteContent);
  const itemIsFavorite = favoriteCtx.isFavorite(props.id);

  function toggleFavoriteHandler() {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description,
      });
    }
  }
  return (
    <div className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.description}></img>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <address>{props.address}</address>
          <div className={classes.actions}>
            <button onClick={toggleFavoriteHandler}>
              {itemIsFavorite ? "Remove from Favorite" : "To Favorite"}
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default MeetupItem;
