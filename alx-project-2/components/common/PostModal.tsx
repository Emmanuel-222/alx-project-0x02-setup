import { useState } from "react";

import { CardProps } from "@/interfaces";

const PostModal: React.FC = () => {
    const [formData, setFormData] = useState<CardProps>({
        title: "",
        content: "",
    });
  return (
    <form>
      <label>
        Title
        <input onClick={(e) => setFormData({...formData, title: e.target.value})} value={formData.title} type="text" placeholder="Put in your title here" />
      </label>
      <label>
        Content
        <input  value={formData.content} type="text" placeholder="Put in your Content here" />
      </label>
      <button className="py-2.5 px-5 rounded-2xl bg-white text-black">Add New Post</button>
    </form>
  );
};

export default PostModal;
