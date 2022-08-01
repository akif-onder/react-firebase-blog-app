import React, { useEffect, useState } from 'react';
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate  } from "react-router-dom";


const Post = ({isAuth}) => {
    const [title, setTitle] = useState('');
    const [postText, setPostText] = useState('');

    const navigate = useNavigate();

    const postsCollectionRef = collection(db, 'posts');

    const createPost = async () => {
        await addDoc(postsCollectionRef, {title, postText, author: {name: auth.currentUser.displayName, id: auth.currentUser.uid}});
        navigate('/');

    }

    useEffect(() => {
      if (!isAuth) {
        navigate('/login');
      }
    
      
    }, []);
    

  return (
    <div className='createPost'>
        <div className="postContainer">
            <h1>Write a Post</h1>
            <div className="inputGp">
                <label htmlFor="">Title:</label>
                <input placeholder='Title...' onChange={(e) =>{setTitle(e.target.value)}}/>
            </div>
            <div className="inputGp">
                <label htmlFor="">Post:</label>
                <textarea placeholder='Post...' onChange={(e) =>{setPostText(e.target.value)}}/>
            </div>
            <button type='submit' onClick={createPost}>Submit Post</button>
        </div>
    </div>
  )
}

export default Post