import css from '../css/friendList.module.css';
import {BsCircleFill} from 'react-icons/bs'
export const FriendListItem = ({ avatar, name, isOnline, key }) => {
  return (
    <li className={css.item} key={key}>
      <span className={css.status}>{isOnline ? <BsCircleFill size ="20px" color ="green"/> : <BsCircleFill size ="20px" color ="red"/>}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};