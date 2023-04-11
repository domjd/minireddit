import React from "react";
import '../post.css'

export function Comment({comment}) {

    const timeHelper = (timeA, timeB) => {
        const mins = ((timeB - timeA)) / 60
        const hours  = mins / 60;
        if(hours > 1){
            return `${Math.floor(hours)} hours ago`
        } else {
            return `${Math.floor(mins)} minutes ago`
        }
    }

    const makeCommentAndReplies = (comment) => {

        if(!comment.body){
            return "";
        }

        return(
                <div className="comment">
                    <div className = "commentBody">
                    <div className="postLeft">
                        <i className='bx bxs-up-arrow-circle' ></i>
                        <p>{comment.ups}</p>
                        <i className='bx bxs-down-arrow-circle' ></i>
                    </div>
                    <div className="postRight">
                        <p>{comment.body}</p>
                        <div className = "postInfo">
                        <p><span className="postAuthor">{comment.author}</span></p>
                        <p>{timeHelper(comment.created_utc, Math.floor(new Date().getTime()/1000) )}</p>
                        </div>
                    </div>
                    </div>
                    <div className = "reply">
                        {comment.replies ? comment.replies.data.children.map((reply) => makeCommentAndReplies(reply.data)): ""}
                    </div>
                    
                </div>
    
        );
    }

    return(
        
        <div className="comment">
            <div className = "commentBody">
            <div className="postLeft">
                <i className='bx bxs-up-arrow-circle' ></i>
                <p>{comment.ups}</p>
                <i className='bx bxs-down-arrow-circle' ></i>
            </div>
            <div className="postRight">
                <p>{comment.body}</p>
                <div className = "postInfo">
                    <p><span className="postAuthor">{comment.author}</span></p>
                    <p>{timeHelper(comment.created_utc, Math.floor(new Date().getTime()/1000) )}</p>
                </div>
            </div>
        </div>
        <div className = "reply">
            {comment.replies ? comment.replies.data.children.map((reply) => makeCommentAndReplies(reply.data)): ""}
        </div>
        
    </div>

    );
}