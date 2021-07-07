import { useContext } from "react";

import cls from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavouritesContext from "../../store/favourite-context";

function MeetupItem(props) {
  const favouritesCtx = useContext(FavouritesContext);

  const itemIsFavourite = favouritesCtx.itemIsFavoutite(props.id);

  function toogleFavouritesStatusHandler() {
    if (itemIsFavourite) {
      favouritesCtx.removeFavourite(props.id);
    } else {
      favouritesCtx.addFavourite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={cls.item}>
      <Card>
        <div className={cls.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={cls.content}>
          <h3>{props.title}</h3>
          <address>{props.adress}</address>
          <p>{props.description}</p>
        </div>
        <div className={cls.actions}>
          <button onClick={toogleFavouritesStatusHandler}>
            {itemIsFavourite ? "Remove from Favourites" : "To Favourites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
