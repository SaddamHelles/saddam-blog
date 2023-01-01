import Head from 'next/head';

import { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../lib/posts-util';

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <meta
          name="description"
          content="I post about programming and web developer"
        />
        <title>Saddam' Blog</title>
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 180,
  };
}

/*

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'getting title',
    image: 'getting-started-with-nextjs.png',
    excerpt: 'NextJS is a the React framework for production',
    date: '2022-12-31',
  },
  {
    slug: 'getting-started-with-nextjs-2',
    title: 'getting title',
    image: 'getting-started-with-nextjs.png',
    excerpt: 'NextJS is a the React framework for production',
    date: '2010-01-13',
  },
  {
    slug: 'getting-started-with-nextjs-3',
    title: 'getting title',
    image: 'getting-started-with-nextjs.png',
    excerpt: 'NextJS is a the React framework for production',
    date: '2009-11-27',
  },
  {
    slug: 'getting-started-with-nextjs-4',
    title: 'getting title',
    image: 'getting-started-with-nextjs.png',
    excerpt: 'NextJS is a the React framework for production',
    date: '2021-02-05',
  },
];
*/
