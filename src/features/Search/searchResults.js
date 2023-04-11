import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {Post} from '../post/post'
import { useEffect } from "react";
import { loadSearchResults, selectSearchResults } from "./searchSlice";
import '../post.css'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export function SearchResults() {

    const {query} = useParams();
    const dispatch = useDispatch()
    const { isLoading } = useSelector((state) => state.search);
    console.log("POST LIST: ", isLoading)

    const defaultSubs = ["/r/AskReddit","/r/announcements","/r/funny","/r/pics","/r/todayilearned","/r/science","/r/IAmA","/r/blog","/r/videos","/r/worldnews","/r/gaming","/r/movies","/r/Music","/r/aww","/r/news","/r/gifs","/r/askscience","/r/explainlikeimfive","/r/EarthPorn","/r/books","/r/television","/r/LifeProTips","/r/sports","/r/DIY","/r/Showerthoughts","/r/space","/r/Jokes","/r/tifu","/r/food","/r/Art","/r/InternetIsBeautiful","/r/mildlyinteresting","/r/GetMotivated","/r/history","/r/nottheonion","/r/gadgets","/r/Futurology","/r/listentothis","/r/philosophy","/r/nosleep","/r/creepy","/r/OldSchoolCool"]


    useEffect(() => {
        dispatch(loadSearchResults(query))

    },[dispatch,query])


    const posts = useSelector(selectSearchResults)
    console.log(posts)


    return(
        <div className="subreddit">
            <div className="subSideBar">
                <h3>Sub Reddits</h3>
                
                {defaultSubs.map((item) => {
                    return (
                        <div className="subRedditItem">
                            <br/>
                        <Link to={item}>{item}</Link>
                        </div>
                    )
                })}
                
            </div>
            <div>
                <h1>Searched For: {query}</h1>
                {isLoading ?  <div className="lds-ripple"><div></div><div></div></div> :

                    posts.map((post, index) => (
                        <Post post={post.data} key={index}/>
                    ))
                
                }
            </div>

        </div>

    );
}