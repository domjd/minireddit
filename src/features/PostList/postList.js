import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {Post} from '../post/post'
import { useEffect } from "react";
import { selectPosts, loadPosts } from "./postSlice";
import '../post.css'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { subreddits } from "../../app/subs";

export function PostList() {

    const {sub} = useParams();
    const dispatch = useDispatch()
    const { isLoading } = useSelector((state) => state.posts);
    console.log("POST LIST: ", isLoading)


    useEffect(() => {
        sub ? dispatch(loadPosts(sub)) : dispatch(loadPosts("popular")) 

    },[dispatch,sub])


    const posts = useSelector(selectPosts)
    console.log(posts)


    return(
        <div className="subreddit">
            <div className="subSideBar">
                <h3>Sub Reddits</h3>
                
                {subreddits.map((item, index) => {
                    return (
                        <div className="subRedditItem" key={index}>
                            <br/>
                        <Link to={item}>{item}</Link>
                        </div>
                    )
                })}
                
            </div>
            <div className="postFeed">
                {isLoading ?  <div className="lds-ripple"><div></div><div></div></div> :
            
                    posts.map((post, index) => (
                        <Post post={post.data} key={index}/>
                    ))
                
                }
            </div>

        </div>

    );
}