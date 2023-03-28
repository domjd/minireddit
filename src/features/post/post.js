import React from "react";
import styles from './post.module.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loadPosts,  selectPosts} from "./postSlice";

export function Post() {

    const posts = useSelector(selectPosts)
    console.log(posts)

    return(
        <div>
        {
            posts.map((post) => (
                <div className={styles.postItem}>
                <p className={styles.subredditName}>{post.data.subreddit_name_prefixed}</p>
                <h3 className={styles.postTitle}>{post.data.title}</h3>
                <img className={styles.postImage} src={post.data.url} alt='post'/>
                <button>Comments</button>
            </div>
            ))
        }
        </div>

    );
}