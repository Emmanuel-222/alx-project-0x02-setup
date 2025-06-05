import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";

const Home: React.FC = () => {
  return (
    <main className="flex flex-wrap justify-center items-center gap-8">
        <Header />
      <Card
        title="Culinary Fusion: Where Worlds Collide on a Plate"
        content="Explore the exciting world of fusion cuisine, where chefs blend traditional flavors and techniques from different cultures to create innovative and surprising dishes. From Tex-Mex to Nikkei, discover the stories behind these delicious culinary mashups."
      />
      <Card
        title="The Enigmatic Nebula: Unveiling Cosmic Secrets"
        content="Journey with us to the far reaches of the Orion Nebula, where stars are born and mysteries of the universe unfold. Recent observations have revealed unexpected organic molecules, challenging our understanding of cosmic evolution. Explore the vibrant colors and intricate structures captured by the latest space telescopes."
      />
      <Card
        title="Urban Gardening: A Green Revolution in Concrete Jungles"
        content="Discover how city dwellers are transforming balconies, rooftops, and tiny patios into lush, productive gardens. Learn practical tips for container gardening, vertical farming, and choosing the right plants for an urban environment. This isn't just a hobby; it's a movement towards sustainable living."
      />
    </main>
  );
};

export default Home;

// const propsData = [
//   {
//     id: 1,
//   },
//   {
//     id: 2,
//   },
//   {
//     id: 3,
//     title: "The Lost Art of Letter Writing",
//     content:
//       "In an age of instant messaging and emails, the thoughtful process of composing and sending a physical letter has become a rarity. We delve into the history of correspondence, its cultural significance, and why a handwritten note can still convey a depth of emotion unmatched by digital communication.",
//   },
//   {
//     id: 4,
//     title: "Decoding Ancient Algorithms: The Antikythera Mechanism",
//     content:
//       "More than 2,000 years ago, an incredibly sophisticated device was created, capable of predicting astronomical positions and eclipses. Uncover the story of the Antikythera Mechanism, its miraculous discovery, and the ongoing efforts to understand its complex gearing and ancient genius.",
//   },
//   {
//     id: 5,
//     title: "Minimalist Living: More Than Just White Walls",
//     content:
//       "Minimalism is often misunderstood as stark aesthetics. This piece explores the philosophy behind living with less – focusing on intentionality, reducing clutter to find clarity, and the psychological benefits of detaching from consumerism. It's about making room for what truly matters.",
//   },
//   {
//     id: 6,
//     title: "The Future of AI in Creative Arts",
//     content:
//       "Can artificial intelligence be truly creative? We examine how AI is currently being used in music composition, visual art generation, and even literature. What are the ethical implications, and how will human artists collaborate or compete with these emerging technologies?",
//   },
//   {
//     id: 7,
//     title: "Sustainable Travel: Exploring Without Exploiting",
//     content:
//       "Eco-tourism and responsible travel are gaining traction. Learn how to make your adventures more sustainable by supporting local communities, minimizing your carbon footprint, and choosing destinations and operators committed to conservation. Travel can be a force for good.",
//   },
//   {
//     id: 8,
//     title: "The Science of Sleep: Why We Need It and How to Get More",
//     content:
//       "Sleep is not a luxury but a biological necessity. This article breaks down the stages of sleep, its impact on memory, mood, and physical health, and offers evidence-based strategies to improve sleep hygiene and combat common sleep disorders.",
//   },
//   {
//     id: 9,
//   },
//   {
//     id: 10,
//     title: "The Hidden World Under Our Feet: Mycorrhizal Networks",
//     content:
//       "Beneath the forest floor lies a vast, intricate network of fungi connecting trees and plants, often dubbed the 'Wood Wide Web.' Discover how these mycorrhizal networks facilitate communication and nutrient exchange, playing a crucial role in ecosystem health.",
//   },
// ];

// You can then use this data like so:
// propsData.forEach(item => {
//   console.log("Title:", item.title);
//   console.log("Content:", item.content);
//
