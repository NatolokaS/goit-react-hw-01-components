import css from '../css/friendList.module.css'

export const FriendList = ({ friends }) => {
    return (
        <div className={css.friendList}>
            <ul className={css.friends}>
                {friends.map(friend => (
                    <li className={css.item} key={friend.id}>
                        <span className={friend.isOnline ? `${css.status} ${css.green}`
                : `${css.status} ${css.red}`}></span>
                           
                        <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
                        <p className={css.name}>{friend.name}</p>
                    </li>
                ))}
            </ul>
        </div>   
    )
}