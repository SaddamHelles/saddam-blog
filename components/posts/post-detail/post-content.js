import ReactMarkdown from 'react-markdown';
import PostHeader from './post-header';
import Image from 'next/image';
import classes from './post-content.module.css';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';

import java from 'react-syntax-highlighter/dist/cjs/languages/prism/java';

import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('java', java);
SyntaxHighlighter.registerLanguage('css', css);

const PostContent = props => {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  console.log('imagePath: ', imagePath);

  const myLoader = ({ src, width, quality }) => {
    return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
  };

  const customRenderers = {
    img: image => (
      <Image
        src={`/images/posts/${post.slug}/${image.src}`}
        alt={image.alt}
        width={600}
        height={300}
      />
    ),
    // paragraph(paragraph) {
    //   const { node } = paragraph;
    //   console.log('all html nodes: ', node.children);

    //   if (node.children[0].type === 'image') {
    //     const image = node.children[0];
    //     console.log(
    //       'Full image URL: ',
    //       `/images/posts/${post.slug}/${image.url}`
    //     );
    //     return (
    //       <div className={classes.image}>
    //         <Image
    //           src={`/images/posts/${post.slug}/${image.src}`}
    //           alt={image.alt}
    //           width={600}
    //           height={300}
    //         />
    //       </div>
    //     );
    //   }
    //   return <p>{paragraph.children}</p>;
    // },
    code: ({ node, inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || '');
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={match[1]}
          children={String(children).replace(/\n$/, '')}
          PreTag="div"
          {...props}
        />
      );
    },
  };
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
