import Head from 'next/head';

import React, { Fragment } from 'react';
import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../lib/posts-util';

const PostDetailPage = props => {
  return (
    <Fragment>
      <Head>
        <meta name="description" content={props.post.excerpt} />
        <title>{props.post.title}</title>
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
};

export function getStaticProps(context) {
  const { params } = context;
  console.log('paramsss: ', params);
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map(filename => filename.replace(/\.md$/, ''));
  console.log('my slugs values: ', slugs);
  return {
    paths: slugs.map(slug => ({ params: { slug, slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
