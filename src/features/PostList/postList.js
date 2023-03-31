import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPosts} from "./postSlice";
import {Post} from '../post/post'
import { useEffect } from "react";
import { loadPosts } from "./postSlice";
import styles from '../post.module.css'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export function PostList() {

    const {sub} = useParams();
    const dispatch = useDispatch()
    const { isLoading } = useSelector((state) => state.posts);
    console.log("POST LIST: ", isLoading)

    const defaultSubs = ["/r/AskReddit","/r/announcements","/r/funny","/r/pics","/r/todayilearned","/r/science","/r/IAmA","/r/blog","/r/videos","/r/worldnews","/r/gaming","/r/movies","/r/Music","/r/aww","/r/news","/r/gifs","/r/askscience","/r/explainlikeimfive","/r/EarthPorn","/r/books","/r/television","/r/LifeProTips","/r/sports","/r/DIY","/r/Showerthoughts","/r/space","/r/Jokes","/r/tifu","/r/food","/r/Art","/r/InternetIsBeautiful","/r/mildlyinteresting","/r/GetMotivated","/r/history","/r/nottheonion","/r/gadgets","/r/Futurology","/r/listentothis","/r/philosophy","/r/nosleep","/r/creepy","/r/OldSchoolCool"]


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
                
                {defaultSubs.map((item) => {
                    return (
                        <div className={styles.subRedditItem}>
                            <br/>
                        <Link to={item}>{item}</Link>
                        </div>
                    )
                })}
                
            </div>
            <div>
                {isLoading ?  <div className="lds-ripple"><div></div><div></div></div> :
            
                    posts.map((post, index) => (
                        <Post post={post.data} key={index}/>
                    ))
                
                }
            </div>

        </div>

    );
}