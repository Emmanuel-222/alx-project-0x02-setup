import { useState } from "react";
import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";
import PostModal from "@/components/common/PostModal";
import { PostData } from "@/interfaces";

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<PostData[]>([
    {
      title: "Culinary Fusion: Where Worlds Collide on a Plate",
      content:
        "Explore the exciting world of fusion cuisine, where chefs blend traditional flavors and techniques...",
    },
    {
      title: "The Enigmatic Nebula: Unveiling Cosmic Secrets",
      content:
        "Journey with us to the far reaches of the Orion Nebula, where stars are born...",
    },
    {
      title: "Urban Gardening: A Green Revolution in Concrete Jungles",
      content:
        "Discover how city dwellers are transforming balconies, rooftops, and tiny patios into gardens...",
    },
  ]);

  const handleAddPost = (newPost: PostData) => {
    setPosts((prev) => [newPost, ...prev]);
    setIsModalOpen(false);
  };

  return (
    <main className="p-6">
      <Header />
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add Post
        </button>
      </div>

      {isModalOpen && (
        <PostModal onClose={() => setIsModalOpen(false)} onSubmit={handleAddPost} />
      )}

      <div className="flex flex-wrap justify-center items-start gap-8">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>
    </main>
  );
};

export default Home;
