import React from "react";
import cardBackground from "../../assets/cardbg.svg"
import testImage from "../../assets/test.png"
import {css} from "emotion"
const cardStyles = {
  background: "whitesmoke",
  borderRadius: 3,
  width: "100%",
  cursor: "pointer",
  userSelect: "none",
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  top: 0,
  background: "#FFFFFF",
  boxShadow: "0 3px 6px 0 rgba(199,199,199,0.50)",
  overflow: "hidden",
  marginLeft: "5%"
};

const Card = ({ zIndex = 0, children }) => (
  <div style={{ ...cardStyles, zIndex }} className={styles}>
    <img src={cardBackground} className="bg"/>
    <div className="content">
      <div className="dp">
        <img src={testImage} className="top"/>
        <img src={testImage} className="bottom"/>
      </div>
      <div className="label">I am a</div>
      <div className="title">Avid Trekker and Hobbyist Rapper</div>
      <div className="label">and I would like to talk about</div>
      <div className="special">Music, Cricket, Bollywood</div>
      <hr className="divider"/>
    </div>
  </div>
);

export default Card;

const styles = css`
.bg{
  position:absolute;
  top:0;
  z-index:-99;
  width:100%;
}
.content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top:32px
}

.title{
  margin-bottom:24px;
}

.dp{
  margin-bottom:24px;
  position: relative; left: 0; top: 0;
  .top{
    filter: blur(8px);
    position: relative;
		top: 0;
    left: 0;
    z-index:2
  }
  .bottom{
    position: absolute;
		top: 0px;
		left: 0px;
    height:104px;
    width:104px;
    border-radius:50%;
    z-index: -1;
  }
}

.label{
  font-family: "Nunito Sans";
  font-size: 12px;
  color: #CBCBCB;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom:8px;
}

.special{
  font-family: "Nunito Sans";
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5em;
  color: #FF0086;
  letter-spacing: 0;
}
`
