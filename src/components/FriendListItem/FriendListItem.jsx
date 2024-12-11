import clsx from "clsx";
import styles from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={styles.cardItem}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p
        className={clsx(
          !isOnline && styles.isOffline,
          isOnline && styles.isOnline
        )}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
}
