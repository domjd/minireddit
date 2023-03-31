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

    const replyHelper = (comment) => {
        let currentComment = comment;
        let currentCommmentReplies = [];
        let index = 0;
        if(currentComment.replies){
            currentCommmentReplies = currentComment.replies.data.children;
        }

        const replies = currentCommmentReplies.map((item) => {
            return (
                <div className={styles.comment}>
                    {item.data.body}
                    <p><span className={styles.postAuthor}>{item.data.author}</span></p>
                    <p>{timeHelper(item.data.created_utc, Math.floor(new Date().getTime()/1000) )}</p>
                </div>
            )
        })

        console.log(replies)

        return replies;
    }

    return(
        <div>
            <div className={styles.comment}>
                <p>{comment.body}</p>
                <p><span className={styles.postAuthor}>{comment.author}</span></p>
                <p>{timeHelper(comment.created_utc, Math.floor(new Date().getTime()/1000) )}</p>
            </div>

        </div>

    );
}