import React from "react";
import "../styles/feauturedpost.css";
import bedroom from "../assets/Images/Posts-images/bedroom.svg";
import buttonarrow from "../assets/Images/Posts-images/buttonarrow.svg";
import time from "../assets/Images/Posts-images/time.svg";
import comments from "../assets/Images/Posts-images/comments.svg";
import bar from "../assets/Images/Posts-images/bar.svg";
import bedplant from "../assets/Images/Posts-images/bedplant.svg";


function FeauturedPosts() {
return (
    <div className="post-hero-1">
        <div className="post-p">
            <p className="post-p1">Practice Advice</p>
            <p className="post-p2">Featured Posts</p>
        </div>
        <div className="post-hero">
            <card className='hen'>
                <img src={bedroom}/>
                <div className="post-hero-p">
                    <div className="post-hero-p1">
                        <p>Google</p>
                        <p>Trending</p>
                        <p>New</p>
                    </div>
                    <div>
                        <p>Loudest à la Madison #1 (L'integral)</p>
                    </div>
                    <div>
                        <p>
                            We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                        </p>
                    </div>
                    <div className="post-time-comment">
                        <div className="post-time">
                            <img src={time}/>
                            <p>22 April 2021</p>
                        </div>
                        <div className="post-comment">
                            <img src={comments}/>
                            <p>10 comments</p>
                        </div>
                    </div>
                    <div className="post-button">
                        <p>Learn More </p>
                        <img src={buttonarrow} className="im-mt1"/>
                    </div>
                </div>
            </card>

            <card className='hen'>
                <img src={bar}/>
                <div className="post-hero-p">
                    <div className="post-hero-p1">
                        <p>Google</p>
                        <p>Trending</p>
                        <p>New</p>
                    </div>
                    <div>
                        <p>Loudest à la Madison #1 (L'integral)</p>
                    </div>
                    <div>
                        <p>
                            We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                        </p>
                    </div>
                    <div className="post-time-comment">
                        <div className="post-time">
                            <img src={time}/>
                            <p>22 April 2021</p>
                        </div>
                        <div className="post-comment">
                            <img src={comments}/>
                            <p>10 comments</p>
                        </div>
                    </div>
                    <div className="post-button">
                        <p>Learn More </p>
                        <img src={buttonarrow} className="im-mt1"/>
                    </div>
                </div>
            </card>
            <card className='hen'>
                <img src={bedplant}/>
                <div className="post-hero-p">
                    <div className="post-hero-p1">
                        <p>Google</p>
                        <p>Trending</p>
                        <p>New</p>
                    </div>
                    <div>
                        <p>Loudest à la Madison #1 (L'integral)</p>
                    </div>
                    <div>
                        <p>
                            We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                        </p>
                    </div>
                    <div className="post-time-comment">
                        <div className="post-time">
                            <img src={time}/>
                            <p>22 April 2021</p>
                        </div>
                        <div className="post-comment">
                            <img src={comments}/>
                            <p>10 comments</p>
                        </div>
                    </div>
                    <div className="post-button">
                        <p>Learn More </p>
                        <img src={buttonarrow} className="im-mt1"/>
                    </div>
                </div>
            </card>
        </div>
    </div>
);
}

export default FeauturedPosts;
