import css from '../css/friendList.module.css'
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
    return (
        <div className={css.friendList}>
            <ul className={css.friends}>
                {friends.map(({ avatar, name, isOnline, id }) => {
                    return (
                        <FriendListItem
                            key={id}
                            avatar={avatar}
                            name={name}
                            isOnline={isOnline}
          
                        />
                    )
                })}
   
            </ul>
        </div>
    );
};