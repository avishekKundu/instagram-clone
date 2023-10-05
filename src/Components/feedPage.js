import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBookmark, faComment, faHeart, faMessage, faPaperPlane, faUser } from "@fortawesome/free-regular-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const FeedPage = () => {
    const handleLike = (e) => {
        console.log(e);
    }
    return (
        <>
            <div className="main_content">
                <div className="head_content">
                    <p>Instagram</p>
                    <div className="headIcon_contain">
                        <i>Heart</i>
                        <i>Message</i>
                    </div>
                </div>
                <div className="post_container">
                    <div className="card">
                        <div className="card-head">
                            <img src="..." className="card-img-top" alt="..." />
                            <p>Username</p>
                        </div>
                        <div className="card-body">
                            <img src="" alt="" />
                            <div className="post_section">
                                <div className="section_one">
                                    <FontAwesomeIcon icon={faHeart} onClick={(e) => { handleLike(e) }} />
                                    <FontAwesomeIcon icon={faComment} />
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </div>
                                <div className="section_two">
                                    <FontAwesomeIcon icon={faBookmark} />
                                </div>
                            </div>
                            <p className="card-text"><span id='likes'>0</span> likes </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <img src="..." className="card-img-top" alt="..." />
                            <p>Username</p>
                        </div>
                        <div className="card-body">
                            <img src="" alt="" />
                            <div className="post_section">
                                <div className="section_one">
                                    <FontAwesomeIcon icon={faHeart} onClick={(e) => { handleLike(e) }} />
                                    <FontAwesomeIcon icon={faComment} />
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </div>
                                <div className="section_two">
                                    <FontAwesomeIcon icon={faBookmark} />
                                </div>
                            </div>
                            <p className="card-text"><span id='likes'>0</span> likes </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <img src="..." className="card-img-top" alt="..." />
                            <p>Username</p>
                        </div>
                        <div className="card-body">
                            <img src="" alt="" />
                            <div className="post_section">
                                <div className="section_one">
                                    <FontAwesomeIcon icon={faHeart} onClick={(e) => { handleLike(e) }} />
                                    <FontAwesomeIcon icon={faComment} />
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </div>
                                <div className="section_two">
                                    <FontAwesomeIcon icon={faBookmark} />
                                </div>
                            </div>
                            <p className="card-text"><span id='likes'>0</span> likes </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <a href="/instagram-clone" ><FontAwesomeIcon icon={faHouse} size="2xl" /></a>
                </div>
                <div>
                    <a href="/profile"><FontAwesomeIcon icon={faUser} size="2xl" /></a>
                </div>
                <div>
                    <a href="/notification"><FontAwesomeIcon icon={faBell} size="2xl" /></a>
                </div>
                <div>
                    <a href="/message"><FontAwesomeIcon icon={faMessage} size="2xl" /></a>
                </div>
            </div>
        </>

    )
}

export default FeedPage;