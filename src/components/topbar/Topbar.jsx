import './Topbar.css';
import { Search, PersonAdd, Chat, Notifications } from "@material-ui/icons";
import {Link } from 'react-router-dom';


function Topbar() {
    return (
      <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">HiBuddys</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search className="searchIcon" />
            <input
              placeholder="Find your friend, post or videos"
              className="searchInput"
            ></input>
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">
             
                  <Link to="/home">Home</Link>
                </span>
              
                <span>
                
                  <Link to="/feed">Timeline</Link>
                </span>
             
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Link to="/login">
                <PersonAdd />
              </Link>
              <span className="topbarIconBadge"></span>
            </div>
            <div className="topbarIconItem">
              <Chat />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Notifications />
              <span className="topbarIconBadge">1</span>
            </div>
            <Link to="/login">
              <button className="createAccount">Login</button>
            </Link>
            <Link to="/register">
              <button className="createAccount">SignUp</button>
            </Link>
          </div>
          <Link to="/profile">
            <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
          </Link>
        </div>
      </div>
    );
}

export default Topbar

