import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {Post} from '../post/post'
import { useEffect } from "react";
import { selectPosts, loadPosts } from "./postSlice";
import styles from '../post.module.css'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { subreddits } from "../../app/subs";

export function PostList() {

    const {sub, query} = useParams();
    const dispatch = useDispatch()
    const { isLoading } = useSelector((state) => state.posts);
    console.log("POST LIST: ", isLoading)


    useEffect(() => {
        sub ? dispatch(loadPosts(sub)) : dispatch(loadPosts("popular")) 

    },[dispatch,sub])


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
        <div className={styles.subreddit}>
            <div className={styles.subSideBar}>
                <h3>Sub Reddits</h3>
                
                {subreddits.map((item, index) => {
                    return (
                        <div className={styles.subRedditItem} key={index}>
                            <br/>
                        <Link to={item}>{item}</Link>
                        </div>
                    )
                })}
                
            </div>
            <div className={styles.postFeed}>
                {isLoading ?  <div className="lds-ripple"><div></div><div></div></div> :
            
                    posts.map((post, index) => (
                        <Post post={post.data} key={index}/>
                    ))
                
                }
            </div>

        </div>

    );
}