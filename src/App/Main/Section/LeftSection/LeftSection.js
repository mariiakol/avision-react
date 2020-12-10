import React, { useState, useEffect } from 'react'
import NewsList from './NewsList/NewsList'
import Trending from './Trending/Trending.js'
import Video from './Video/Video'
import LatestArticles from './LatestArticles/LatestArticles'
import '../../../../common/common-styles.css'
import NewsListData from './NewsList/NewsListData'

const postsPerPage = 3;
let arrayForHoldingPosts = [];

const LeftSection = ({
    likeArticle,
    removeArticle
}) => {

    const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(3);

  const loopWithSlice = (start, end) => {
    const slicedPosts = NewsListData.slice(start, end);
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
    setPostsToShow(arrayForHoldingPosts);
  };

  useEffect(() => {
    loopWithSlice(0, postsPerPage);
  }, []);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  };
    return (
        <div>
            <div className = "row">
                <NewsList
                    likeArticle = {likeArticle}
                    removeArticle = {removeArticle}
                    postsToRender={postsToShow}
                    handleShowMorePosts = {handleShowMorePosts}
                />
            </div> 
            <div className = "row">
                <Trending/>
            </div>
            <div className = "row">
                <Video/>
            </div>
            <div className = "row">
                <LatestArticles/>
            </div>
        </div>
    )
}

export default LeftSection