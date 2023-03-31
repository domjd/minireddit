import React from "react";
import styles from '../post.module.css'
import { useDispatch, useSelector } from "react-redux";
import { selectPostDetails, selectPostComments } from "./FullPostSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { loadPost } from "./FullPostSlice";
import { Comment } from "../Comment/comment";


export function FullPost () {

    const {id, sub, title} = useParams();
    const dispatch = useDispatch();

    const timeHelper = (timeA, timeB) => {
        const mins = ((timeB - timeA)) / 60
        const hours  = mins / 60;
        if(hours > 1){
            return `${Math.floor(hours)} hours ago`
        } else {
            return `${Math.floor(mins)} minutes ago`
        }
    }


    useEffect(() => {
        dispatch(loadPost({sub, id, title}))
    },[dispatch, sub, id, title])

    const { isLoading } = useSelector((state) => state.post);
    const { isSuccess } = useSelector((state) => state.post);
    console.log("FULL POST SUCCESS: ", isSuccess)

    //const post = useSelector(selectPost)
    const postDetails = useSelector(selectPostDetails)
    const postComments = useSelector(selectPostComments)


    return (
        <div>
             {!isLoading ? 
             <div>
             <h1>{postDetails.title}</h1>
             {postDetails.post_hint === 'image' ? 
                <img className={styles.postImage} src={postDetails.url} alt='post'/> : ''}

                <div>
                    {postComments.map((comment, index) => {
                         return <Comment comment={comment.data} key={index}/>
                    })}
                </div>
             </div>

             : <div className="lds-ripple"><div></div><div></div></div> }
        </div>
    );

}