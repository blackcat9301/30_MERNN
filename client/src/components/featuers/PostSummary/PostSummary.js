import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import './PostSummary.scss';

import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';

const cutText = (content, maxLength) => {
  if(maxLength < 1) return 'Error';
  if(content.length > maxLength)
    content = content.substr(0, content.lastIndexOf(" ", maxLength)) + '...';

  return content;
};

const PostSummary = ({ id, title, content,history,author }) => (
  <article className="post-summary">
    <SmallTitle>{title}</SmallTitle>
    <HtmlBox>{cutText(content,250)}</HtmlBox>
    <p> Author: {author}</p>
    <Button variant={'primary'}><Link to={`/posts/${id}`}>
            Read more
        </Link></Button>
  </article>
);

PostSummary.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string.isRequired,
};

export default PostSummary;