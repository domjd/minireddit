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

    const commentFormatter = (comment) => {
        const commentReplies = comment.data.children.replies;
        return (
            <div className={styles.comment}>
            <p>{comment.body}</p>
            <p><span className={styles.postAuthor}>{comment.author}</span></p>
            <p>{timeHelper(comment.created_utc, Math.floor(new Date().getTime()/1000) )}</p>
        </div>
        )
    }

    const replyHelper = (comment) => {
        let currentComment = comment;
        let currentCommmentReplies = comment.replies;
        let replyArray = [];
        
        if(currentComment.replies){
            currentCommmentReplies = currentComment.replies.data.children;
            let repliesCount = currentComment.replies.data.children.length;
            
            for(let i = 0; i < repliesCount; i++){
                replyArray.push(commentFormatter(repliesCount[i]))

               
            }

            
        }

        console.log(replyArray)

        return replyArray;
    }

    return(
        
        <div>
            <div className={styles.comment}>
            <div className={styles.postLeft}>
                <i class='bx bxs-up-arrow-circle' ></i>
                    <p>{comment.ups}</p>
                    <i class='bx bxs-down-arrow-circle' ></i>
                </div>
                <div className={styles.postRight}>
                <p>{comment.body}</p>
                    <div className = {styles.postInfo}>
                    <p><span className={styles.postAuthor}>{comment.author}</span></p>
                    <p>{timeHelper(comment.created_utc, Math.floor(new Date().getTime()/1000) )}</p>
                    </div>
                </div>

                
            </div>

        </div>

    );
}