import React from "react";
import styles from '../post.module.css'
import { useSelector } from "react-redux";
import { selectPosts} from "../PostList/postSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export function Post({post}) {

    const timeHelper = (timeA, timeB) => {
        const mins = ((timeB - timeA)) / 60
        const hours  = mins / 60;
        if(hours > 1){
            return `${Math.floor(hours)} hours ago`
        } else {
            return `${Math.floor(mins)} minutes ago`
        }
    }

    return(
        <div>
            <div className={styles.postItem}>
                <div className={styles.postLeft}>
                <i class='bx bxs-up-arrow-circle' ></i>
                    <p>{post.ups}</p>
                    <i class='bx bxs-down-arrow-circle' ></i>
                </div>
                <div className={styles.postRight}>
                    <p className={styles.subredditName}>{post.subreddit_name_prefixed}</p>
                    <h3 className={styles.postTitle}>{post.title}</h3>
                    {post.post_hint === 'image' ? 
                        <img className={styles.postImage} src={post.url} alt='post'/> : ''}
                    <div className={styles.postInfo}>
                        <p>Posted By <span className={styles.postAuthor}>{post.author}</span></p>
                        <p>{timeHelper(post.created_utc, Math.floor(new Date().getTime()/1000) )}</p>
                        <Link to={post.permalink}>{post.num_comments} comments</Link>
                    </div>
                </div>
        </div>
      
        </div>

    );
}