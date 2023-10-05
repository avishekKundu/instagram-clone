import { faBell, faMessage, faUser } from "@fortawesome/free-regular-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Profile = () => {
    return (
        <>
            <div>
                <div>
                    <center>Allie Grater</center>
                    <div>
                        <img src="" alt="Not found" />
                    </div>
                </div>
                <div>
                    <div>
                        <h1>100k</h1>
                        <i></i>
                    </div>
                    <div>
                        <h1>10k</h1>
                        <i></i>
                    </div>
                </div>
                <div>
                    <p>Bio</p>
                    <p> This is my profile, i came here to meet new friends</p>
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
            </div>

        </>
    )
}

export default Profile;