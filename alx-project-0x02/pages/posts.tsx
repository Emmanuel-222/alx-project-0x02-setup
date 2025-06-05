import { GetStaticProps } from "next";
import PostCard from "@/components/common/PostCard";
import { PostProps, PostsPageProps } from "@/interfaces";
import Header from "@/components/layout/Header";



const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <Header />
      <h1 className="text-2xl font-bold mb-4">Latest Posts</h1>
      {posts.map((post) => (
        <PostCard key={post.id} title={post.title} body={post.body} userId={post.userId} />
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostProps[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default PostsPage;
