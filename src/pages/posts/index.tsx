import { posts } from "@/constants";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";

interface Props {
  posts: {
    body: string;
    slug: string;
    title: string;
  }[];
}

const Page: NextPage<Props> = (props) => {
  return (
    <div>
      <h1>My test application</h1>
      <ul>
        {props.posts.map((post) => (
          <li key={post.slug}>
            <p>{post.title}</p>
            <Link className="block" href={`/posts/${post.slug}`}>
              Read post
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: { posts },
  };
};
