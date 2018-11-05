import React from 'react'
import { Link } from '../../routes'
import Wrapper from './Wrapper'
import Comments from '../Comments'

const PostItem = ({ post }) => (
  <Wrapper>
    <Link route='post' params={{ slug: post.title }}>
      <a>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <p><Comments /></p>
      </a>
    </Link>
  </Wrapper>
)

export default PostItem
