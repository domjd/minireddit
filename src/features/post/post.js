import React from "react";
import styles from './post.module.css'
import { useSelector } from "react-redux";
import { selectPosts} from "./postSlice";

export function Post() {

    const posts = useSelector(selectPosts)
    console.log(posts)

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
        {
            posts.map((post) => (
                <div className={styles.postItem}>
                <p className={styles.subredditName}>{post.data.subreddit_name_prefixed}</p>
                <h3 className={styles.postTitle}>{post.data.title}</h3>
                {post.data.is_reddit_media_domain ? 
                <img className={styles.postImage} src={post.data.url} alt='post'/> : ''}
                <div className={styles.postInfo}>
                    <p>Posted By <span className={styles.postAuthor}>{post.data.author}</span></p>
                    <p>{timeHelper(post.data.created_utc, Math.floor(new Date().getTime()/1000) )}</p>
                    <p>{post.data.num_comments} comments</p>
                </div>
            </div>
            ))
        }
        </div>

    );
}