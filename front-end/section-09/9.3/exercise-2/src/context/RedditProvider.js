import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import getPostsBySubreddit from '../services/redditAPI';
import RedditContext from './RedditContext';

function RedditProvider({ children }) {
  const [postsBySubreddit, setPostsBySubreddit] = useState({
    frontend: {
      items: [],
    },
    reactjs: {
      items: [],
    },
  });
  const [selectedSubreddit, setSelectedSubreddit] = useState('reactjs');
  const [shouldRefreshSubreddit, setShouldRefreshSubreddit] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const hasSubredditLoaded = () => {
    const posts = postsBySubreddit[selectedSubreddit];

    return posts.items.length > 0;
  };

  const handleFetchSuccess = (json) => {
    const lastUpdated = Date.now();
    const items = json.data.children.map((child) => child.data);

    setShouldRefreshSubreddit(false);
    setIsFetching(false);
    setPostsBySubreddit({
      ...postsBySubreddit,
      [selectedSubreddit]: {
        items,
        lastUpdated,
      },
    });
  };

  const handleFetchError = (error) => {
    setShouldRefreshSubreddit(false);
    setIsFetching(false);
    setPostsBySubreddit({
      ...postsBySubreddit,
      [selectedSubreddit]: {
        error: error.message,
        items: [],
      },
    });
  };

  const fetchPosts = () => {
    setShouldRefreshSubreddit(false);
    setIsFetching(true);

    getPostsBySubreddit(selectedSubreddit)
      .then(handleFetchSuccess)
      .catch(handleFetchError);
  };

  useEffect(() => {
    if (shouldRefreshSubreddit && !hasSubredditLoaded()) {
      fetchPosts();
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [selectedSubreddit]);

  const handleSubredditChange = (subreddit) => setSelectedSubreddit(subreddit);

  const context = {
    isFetching,
    postsBySubreddit,
    selectedSubreddit,
    shouldRefreshSubreddit,
    selectSubreddit: handleSubredditChange,
    fetchPosts,
    availableSubreddits: Object.keys(postsBySubreddit),
    posts: postsBySubreddit[selectedSubreddit].items,
  };

  return (
    <RedditContext.Provider value={ context }>
      { children }
    </RedditContext.Provider>
  );
}

export default RedditProvider;

RedditProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
