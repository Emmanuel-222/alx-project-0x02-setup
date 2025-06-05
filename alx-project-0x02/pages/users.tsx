import { GetStaticProps } from "next";
import UserCard from "@/components/common/UserCard";
import { UserProps, UsersPageProps } from "@/interfaces";
import Header from "@/components/layout/Header";



const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <Header />
      <h1 className="text-2xl font-bold mb-4">Latest Posts</h1>
      {users.map((user) => (
        <UserCard key={user.name} name={user.name} email={user.email} address={user.address} />
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users:UserProps[] = await res.json();

  return {
    props: {
      users,
    },
  };
};

export default UsersPage;
