import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { posts } from "../../constants";

interface Props {
  post: {
    slug: string;
    title: string;
    body: string;
  };
}

const Page: NextPage<Props> = (props) => {
  return (
    <div>
      <h1>{props.post.title}</h1>
      <p>{props.post.body}</p>
      <Link className="block" href="/posts">
        Go back to posts
      </Link>
      <Link className="block" href="/">
        Go back home
      </Link>
    </div>
  );
};

export default Page;

export const getStaticProps: GetStaticProps = async (context) => {
  if (!(context.params && typeof context.params.slug === "string")) {
    return { notFound: true };
  }

  const slug = context.params.slug;

  const postContent = posts.filter((p) => {
    return p.slug === slug;
  });

  if (!postContent) {
    return { notFound: true };
  }

  return {
    props: { post: postContent[0] },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ["/posts/post-1", "/posts/post-2", "/posts/post-3"],
    fallback: "blocking",
  };
};
