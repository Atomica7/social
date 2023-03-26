import React from 'react'
import ava from '../../ava.jpg'
import ava_m from '../../ava_m.jpg'

function Profile(){
  return(
    <div className="profile">
      <div class="profile">
        <div class="me">
          <img src={ava} alt="profile mini photo"/>
           <p>Elon Mask</p>
        </div>
        <div class="posts">
          <input type="text" placeholder='enter the post'/>
          <button>Add post</button>
          <div class="post">
            <img src={ava_m} alt="profile mini photo"/>
            <span>Elon Mask</span>
            <p>Some text</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
