import './Share.css';
import { PermMediaTwoTone, Label, Room, EmojiEmotions } from "@material-ui/icons";
export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
          <div className="shareTop">
<img src="./assets/person/1.jpeg" alt="" className="shareProfileImg"/>
<input placeholder="Share your thought" className="shareInput"/>
          </div>
          <hr className="shareHr"/>
          <div className="shareBotton">
              <div className="shareOptions">
                  <div className="shareOption">
                      <PermMediaTwoTone htmlColor='tomato' className="shareIcon"/>
                      <span className="shareOptionText">Photo or Video</span>
                  </div>
                  <div className="shareOption">
                      <Label htmlColor='blue' className="shareIcon"/>
                      <span className="shareOptionText">Tag</span>
                  </div>
                  <div className="shareOption">
                      <Room htmlColor='green' className="shareIcon"/>
                      <span className="shareOptionText">Location</span>
                  </div>
                  <div className="shareOption">
                      <EmojiEmotions htmlColor='yellow' className="shareIcon"/>
                      <span className="shareOptionText">Feelings</span>
                  </div>
              </div>
                        <button  className="shareButton">Share</button>

          </div>
      </div>
    </div>
  )
}
