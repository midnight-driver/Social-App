import './feed.css';
import Share from "../Share/Share";
import Post from "../Post/Post";
import {Posts} from "../dummydata";
function feed() {
    return (
      <div className="feed">
        <div className="feedWrapper">
          <Share />
          {Posts.map((p)=>(
<Post key={p.id} post={p}/>
          ))}
          
         
        </div>
      </div>
    );
}

export default feed
