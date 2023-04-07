import React from "react";
import styles from '../post.module.css'
import { useSelector } from "react-redux";
import { selectPosts} from "../PostList/postSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { current } from "@reduxjs/toolkit";

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
                <div className={styles.comment}>
                    <div className = {styles.commentBody}>
                    <div className={styles.postLeft}>
                        <i className='bx bxs-up-arrow-circle' ></i>
                        <p>{comment.ups}</p>
                        <i className='bx bxs-down-arrow-circle' ></i>
                    </div>
                    <div className={styles.postRight}>
                        <p>{comment.body}</p>
                        <div className = {styles.postInfo}>
                        <p><span className={styles.postAuthor}>{comment.author}</span></p>
                        <p>{timeHelper(comment.created_utc, Math.floor(new Date().getTime()/1000) )}</p>
                        </div>
                    </div>
                    </div>
                    <div className = {styles.reply}>
                        {comment.replies ? comment.replies.data.children.map((reply) => makeCommentAndReplies(reply.data)): ""}
                    </div>
                    
                </div>
    
        );
    }

    return(
        
        <div className={styles.comment}>
            <div className = {styles.commentBody}>
            <div className={styles.postLeft}>
                <i className='bx bxs-up-arrow-circle' ></i>
                <p>{comment.ups}</p>
                <i className='bx bxs-down-arrow-circle' ></i>
            </div>
            <div className={styles.postRight}>
                <p>{comment.body}</p>
                <div className = {styles.postInfo}>
                    <p><span className={styles.postAuthor}>{comment.author}</span></p>
                    <p>{timeHelper(comment.created_utc, Math.floor(new Date().getTime()/1000) )}</p>
                </div>
            </div>
        </div>
        <div className = {styles.reply}>
            {comment.replies ? comment.replies.data.children.map((reply) => makeCommentAndReplies(reply.data)): ""}
        </div>
        
    </div>

    );
}