import { Box, Typography } from '@material-ui/core';
import React from 'react';
import Markdown from 'react-markdown';
import remarkDirectiveRehype from 'remark-directive-rehype'
import remarkGfm from 'remark-gfm';
import remarkDirective from 'remark-directive';
import remarkMath from 'remark-math';
import remarkBreaks from 'remark-breaks';
import rehypeKatex from 'rehype-katex';
import ContentWrapper from '../Basic/contentWrapper';
import {solarizedDarkAtom} from 'react-syntax-highlighter/dist/esm/styles/prism'
import Table from '../Basic/table';
import { useEffect, useState } from 'react';
import 'katex/dist/katex.min.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Bookmark from '../Basic/LinkPreview';
import { visit } from "unist-util-visit";

/** Source: https://codesandbox.io/p/sandbox/interesting-matsumoto-y6x6n?file=%2Fsrc%2FApp.js%3A17%2C11 */
// function reactMarkdownRemarkDirective() {
//   return (tree) => {
//     visit(
//       tree,
//       ["textDirective", "leafDirective", "containerDirective"],
//       (node) => {
//         console.log(node)
//         node.data = {
//           hName: node.name,
//           hProperties: {
//             ...node.attributes,
//             ...node.properties
//           },
//           ...node.data
//         };
//         return node;
//       }
//     );
//   };
// }

const BlogMarkdown = ({ content }) => {
  
  const [renderedMD, setRenderedMD] = useState("");
  useEffect(
    () => {
        fetch(content)
        .then(res => {
          return res.text()
        })
        .then(text => {
          console.log(text)
          text = text.slice(16, -2) // Remove export default
          text = text.replace(/\\r\\n|\\n\\n|\n+/g, " \n ") // Replace \r\n with two spaces and \n
          setRenderedMD(text)
        })
    },
    []
  )
  return (
    <ContentWrapper>
    <Markdown
        components={{
            h1: ({ node, children, ...rest }) => (
              <Typography variant="h1">{children}</Typography>
            ),
            h2: ({ node, children, ...rest }) => (
              <Typography variant="h2">{children}</Typography>
            ),
            h3: ({ node, children, ...rest }) => (
              <Typography variant="h3">{children}</Typography>
            ),
            table: ({ node, ...props }) => (
              <table style={{ borderCollapse: "collapse", width: "100%" }} {...props} />
            ),
            th: ({ node, ...props }) => (
              <th
                style={{
                  border: (props.id == "no-border") ? "none" : "1px solid black",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                <b>
                  {props}
                </b>
              </th>
            ),
            img: ({node, src, alt, ...props}) => {
              // Extract data-* attributes from the title string
              return <img
                src={src}
                alt={alt}
                width={props.width}
                // Spread extracted data-* attributes
              />
            },
            td: ({ node, ...props }) => (
              <td
                style={{
                  border: (props.id == "no-border") ? "none" : "1px solid black",
                  padding: "10px",
                  textAlign: "center",
                }}>
                  {props}
                </td>
            ),
            link : ({ node, href, className, children, ...props }) => {
              // return <a href={props.href} target="_blank" rel="noopener noreferrer">{props.children}</a>
              if (className == "fancy") return <Bookmark url={href}/>
              else return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
            },
            code: (props) => {
              const {children, className, node, ...rest} = props
              const match = /language-(\w+)/.exec(className || '')
              return match ? (
                <SyntaxHighlighter
                  {...rest}
                  showLineNumbers= {true}
                  PreTag="div"
                  children={String(children).replace(/\n$/, '')}
                  language={match[1]}
                  style={solarizedDarkAtom}
                />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              )
            },
            blockquote: ({node, children, ...props}) => (
              <blockquote
                style={{
                  border: "1px solid #777777",
                  padding: "10px",
                  opacity: 0.9,
                  color: 'grey',
                  fontStyle: 'italic',
                  marginLeft: "0px",
                  borderRadius: "10px"
                }}
              >
                {children}
              </blockquote>
            ),
        }}
        remarkPlugins={[remarkGfm, remarkBreaks, remarkMath, remarkDirective, remarkDirectiveRehype]}
        rehypePlugins={[rehypeKatex]}
    >
        {`${renderedMD}`}
    </Markdown>
    </ContentWrapper>
  );
};

export default BlogMarkdown;