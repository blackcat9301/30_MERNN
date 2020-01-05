import React from 'react';

import PageTitle from '../../common/PageTitle/PageTitle';
import PostsCounter from '../../featuers/PostsCounter/PostsCounter';
import Posts from '../../featuers/Posts/PostsContainer'
const PostsPage = () => (
  <div>
    <PageTitle>Posts list</PageTitle>
    <PostsCounter />
    <Posts />
  </div>
);

export default PostsPage;