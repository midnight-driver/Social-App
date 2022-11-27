import './sidebar.css'
import {RssFeed, ChatBubble, PlayCircleFilled, Group,Event,Bookmarks,QuestionAnswer,Work, DeveloperMode} from "@material-ui/icons"
import {Users} from '../dummydata';
import Friendlist from '../friendlist/Friendlist';
function Sidebar() {
    return (
       
         <div className="sidebar">
             <div className="sidebarWrapper">
                 <ul className="sidebarList">
                     <li className="sidebarListItem">
<RssFeed className="sidebarIcon"/>
<span className="sidebarItemText">Feed</span>
                     </li>
                       <li className="sidebarListItem">
<ChatBubble className="sidebarIcon"/>
<span className="sidebarItemText">Chats</span>
                     </li>
                       <li className="sidebarListItem">
<PlayCircleFilled className="sidebarIcon"/>
<span className="sidebarItemText">Videos</span>
                     </li>
                       <li className="sidebarListItem">
<Group className="sidebarIcon"/>
<span className="sidebarItemText">Groups</span>
                     </li>
                      <li className="sidebarListItem">
<Bookmarks className="sidebarIcon"/>
<span className="sidebarItemText">Bookmark</span>
                     </li>
                      <li className="sidebarListItem">
<QuestionAnswer className="sidebarIcon"/>
<span className="sidebarItemText">Questions</span>
                     </li>
                      <li className="sidebarListItem">
<Work className="sidebarIcon"/>
<span className="sidebarItemText">Jobs</span>
                     </li>
                    
                      <li className="sidebarListItem">
 <Event className="sidebarIcon"/>
<span className="sidebarItemText">Events</span>
                     </li>
                      <li className="sidebarListItem">
<DeveloperMode className="sidebarIcon"/>
<span className="sidebarItemText">Courses</span>
                     </li>
                     <button className="sidebarButton">Show more</button>
                     <hr className="sidebarHr"/>
                     <ul className="sidebarFriendList">
                        {Users.map(u=>(
                            <Friendlist key={u.id} user={u}/>
                        ))}
                     </ul>
                     
                     
                     
                 </ul>
             </div>
         </div>   
    
    )
}

export default Sidebar
