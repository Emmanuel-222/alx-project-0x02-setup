import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col gap-4">
      <h1 className="text-center text-3xl">This is the header</h1>
      <nav className="flex justify-center items-center gap-4">
        <Link className="bg-white text-black py-1.5 px-5 rounded-2xl" href="/home">Home</Link>
        <Link className="bg-white text-black py-1.5 px-5 rounded-2xl" href="/about">About</Link>
        <Link className="bg-white text-black py-1.5 px-5 rounded-2xl" href="/posts">Posts</Link>
      </nav>
    </header>
  );
};

export default Header;
