export const FriendList = ({ friends }) => {
    return (
        friends.map(friend => (
            <li className="item" key={friend.id}>
                friend.isOnLine ? <span className="status" style={{ color:"red" }}></span>
                 : <span className="status" style={{ color:"green" }}></span>
                <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
                <p className="name">{friend.name}</p>
            </li>
        ))
        
    )
}