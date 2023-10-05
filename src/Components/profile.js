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
                <div className='text-light p-5'>
                <h5>Bio</h5>
                <p>
                    This is my profile, i came here to meet new friends
                </p>
            </div>
            </div>


            

            <div className='row text-light text-center display-5 border border-1 p-2'>
                <div className='col'>
                    <i className="bi bi-house"></i>
                </div>
                <div className='col'>
                    <i className="bi bi-person"></i>
                </div>
                <div className='col'>
                    <i className="bi bi-app-indicator"></i>
                </div>
                <div className='col'>
                    <i className="bi bi-chat-right"></i>
                </div>
            </div>
        </>
    )
}

export default Profile;