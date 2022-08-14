import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widget_articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widget_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Coronavirus 2022 Updates", "Top News: 23,175 readers")}
      {newsArticle(
        "Blockchain platform Fair.xyz raises £3.7m for NFT minting tech",
        "Tech: 8,789 readers"
      )}
      {newsArticle(
        "Why Web 3.0 Will Change the Current State of the Attention Economy Drastically",
        "Tech: 4,798 readers"
      )}
      {newsArticle(
        "Mailchimp bans crypto content creators without prior notice",
        "Cryptocurrency: 2,127 readers"
      )}
      {newsArticle(
        "Elon Musk teases new Tesla Roadster model to be the 'fastest car in the world'",
        "Automotive: 2,015 readers"
      )}
      {newsArticle(
        "How The Metaverse Is Shaping The Entertainment World Through Concerts, Video Games And Movies",
        "Tech: 1,991 readers"
      )}
    </div>
  );
}

export default Widgets;
