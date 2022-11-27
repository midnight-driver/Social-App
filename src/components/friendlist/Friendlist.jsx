import './friendlist.css';

export default function Friendlist({user}) {
    return (
      <li className="sidebarFriend">
        <img
          src={user.profilePicture}
          alt=""
          className="sidebarFriendImg"
        />
        <span className="friendName">{user.username}</span>
      </li>
    );
}
