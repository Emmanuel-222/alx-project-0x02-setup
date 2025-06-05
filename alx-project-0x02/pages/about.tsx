import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const About: React.FC = () => {
  return (
    <main className="flex flex-wrap gap-4">
      <Header />
      <h1>Hello, this is the About page</h1>
      <div className="flex flex-wrap gap-4">
        <Button size="w-sm" shape="rounded-sm" />
        <Button size="w-md" shape="rounded-md" />
        <Button size="w-lg" shape="rounded-lg" />
      </div>
    </main>
  );
};

export default About;
