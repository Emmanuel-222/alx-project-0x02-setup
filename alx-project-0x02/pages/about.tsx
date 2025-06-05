import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const About: React.FC = () => {
  return (
    <main className="flex flex-wrap gap-4">
      <Header />
      <h1>Hello, this is the About page</h1>
      <div className="flex flex-wrap gap-4">
         <Button title="Small Rounded-sm" size="small" shape="rounded-sm" />
        <Button title="Medium Rounded-md" size="medium" shape="rounded-md" />
        <Button title="Large Rounded-full" size="large" shape="rounded-full" />
      </div>
    </main>
  );
};

export default About;
