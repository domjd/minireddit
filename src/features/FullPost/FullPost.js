import React from "react";
import  '../post.css'
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

    console.log("COMEMNT: DATA: ", postComments)


    return (
        <div>
             {!isLoading ? 
             <div>
                <div className="postItem">
                    <div className="postLeft">
                    <i className='bx bxs-up-arrow-circle' ></i>
                        <p>{postDetails.ups}</p>
                        <i className='bx bxs-down-arrow-circle' ></i>
                    </div>
                    <div className="postRight">
                        <p className="subredditName">{postDetails.subreddit_name_prefixed}</p>
                        <h1 className="postTitle">{postDetails.title}</h1>
                        {postDetails.selftext ? <p className="postText">{postDetails.selftext}</p> : ""}
                        {postDetails.post_hint === 'image' ? 
                            <img className="postImage" src={postDetails.url} alt='post'/> : ''}
                        <div className="postInfo">
                            <p>Posted By <span className="postAuthor">{postDetails.author}</span></p>
                            <p>{timeHelper(postDetails.created_utc, Math.floor(new Date().getTime()/1000) )}</p>
                            <p><i className='bx bx-comment'></i> {postDetails.num_comments} comments</p>
                        </div>
                    </div>
                </div>

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