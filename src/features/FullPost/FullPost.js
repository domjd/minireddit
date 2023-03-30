import React from "react";
import styles from '../post.module.css'
import { useDispatch, useSelector } from "react-redux";
import { selectPostDetails, selectPostComments } from "./FullPostSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { loadPost } from "./FullPostSlice";


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
    console.log("FULL POST LOADING: ", isLoading)
    console.log("FULL POST SUCCESS: ", isSuccess)

    //const post = useSelector(selectPost)
    const postDetails = useSelector(selectPostDetails)
    const postComments = useSelector(selectPostComments)

    return (
        <div>
             {isSuccess ? 
             <div>
             <h1>{postDetails.title}</h1>
             {postDetails.post_hint === 'image' ? 
                <img className={styles.postImage} src={postDetails.url} alt='post'/> : ''}

                <div>
                    {postComments.map((comment, index) => {
                        return (
                            <div className={styles.comment} key={index}>
                                <p>{comment.data.body}</p>
                                <p><span className={styles.postAuthor}>{comment.data.author}</span></p>
                                <p>{timeHelper(comment.data.created_utc, Math.floor(new Date().getTime()/1000) )}</p>
                            </div>
                        )
                    })}
                </div>
             </div>

             : <div className="lds-ripple"><div></div><div></div></div> }
        </div>
    );

}