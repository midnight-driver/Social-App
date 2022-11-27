import "./Post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../dummydata";
import {useState} from 'react';
function Post({post}) {
  const [like, setLike] = useState(post.like);
  const [islike, setIslike]=useState(false); 
  const likeHandler=()=>{
    setLike(islike ? like-1 :like+1)
    setIslike(!islike)
  }
  const use= Users.filter((u)=>u.id===1)
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt="img"
              className="postProfileImg"
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight"></div>
          <MoreVert />
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="assets/like.png"
              alt=""
              onClick={likeHandler}
              className="likeIcon"
            />
            <img
              src="assets/heart.png"
              alt=""
              onClick={likeHandler}
              className="likeIcon"
            />
            <span className="likeCounter">{like} people like it</span>
          </div>

          <div className="postBottomRight">
            <span className="commentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
