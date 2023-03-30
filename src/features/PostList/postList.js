import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPosts} from "./postSlice";
import {Post} from '../post/post'
import { useEffect } from "react";
import { loadPosts } from "./postSlice";

export function PostList() {

    
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.posts);
  console.log("POST LIST: ", isLoading)


  useEffect(() => {
    dispatch(loadPosts())
   },[dispatch])


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
            {isLoading ?  <div className="lds-ripple"><div></div><div></div></div> :
        
            posts.map((post, index) => (
                <Post post={post} key={index}/>
            ))
        
        }
        </div>

    );
}