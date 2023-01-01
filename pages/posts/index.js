import Head from 'next/head';

import React, { Fragment } from 'react';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';

const AllPostsPage = props => {
  return (
    <Fragment>
      <Head>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
        <title>All Posts</title>
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
