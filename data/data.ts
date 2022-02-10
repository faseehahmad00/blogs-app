const posts = [
  {
    id: 1,
    title: "Announcing Flutter for Windows",
    author: "Tim Sneath",
    content:
      "Our goal with Flutter is to give you the tools you need to build a great experience, regardless of which operating system you’re building for. And so we want to bring the same core framework and tools to every place you might want to paint pixels. Flutter allows you to handcraft beautiful experiences where your brand and design come to the forefront. ",
    likes: 10,
    img: "https://picsum.photos/id/200/300",
    tags: ["tech", "beauty", "lifestyle", "travel", "trending"],
  },
  {
    id: 2,
    title: "A goodbye to google ",
    author: "Alex Hanna",
    content:
      "In resignation letters, this is where you write how much you appreciated the people you worked with. And I’m definitely going to do the same. But this is in spite of the culture of Google, rather than because of. The Ethical AI team created by Meg Mitchell and Timnit Gebru was one of the most inclusive on which I’ve ever worked or had the fortune of witnessing firsthand.",
    likes: 6,
    img: "https://picsum.photos/id/250/300",
    tags: ["tech", "beauty", "lifestyle", "travel", "latest"],
  },
  {
    id: 3,
    title: "Never ignore a recruiter",
    author: "John Clark",
    content:
      "If you ask a room full of software engineers what they think about recruiters, there are a number of themes that arise. There are jokes about how overwhelming the experience is, the volume of messages, how eye-rolling-ly bad the targeting is, how impersonal the process is There are chapters in books lamenting the feeling that someone in the tech industry gets from the constant recruiter outreach",
    likes: 10,
    img: "https://picsum.photos/id/100/300",
    tags: ["tech", "beauty", "lifestyle", "travel", "latest"],
  },
  {
    id: 4,
    title: "The great blockchain",
    author: "My test Blog",
    content:
      "The indulgences were medieval pay-to-play, a way for the naughty to offset their peccadillos with a payment to the church. Covet your neighbor’s wife? Eat too many eel pies on Easter Sunday? Give a bag of silver or gold to your local bishop and you too could still walk through those pearly gates. For Luther it was a step too far — a greedy, cynical ploy by the Church that implied humans could haggle with God. It was widely hated, and when someone finally had the gall — or stupidity — to complain about it, people listened. Including, of course, the authorities.",
    likes: 50,
    img: "https://picsum.photos/id/210/300",
    tags: ["tech", "beauty", "lifestyle", "travel", "mostliked"],
  },
  {
    id: 5,
    title: "NFT's aren't about clouds",
    author: "My test Blog",
    content:
      "In a world where celebrities like Jimmy Fallon, Timbaland, and Gwyneth Paltrow are buying Bored Apes and making them their profile pictures, it’s easy to jump to the conclusion that these blockchain contracts displayed as digital avatars are just a hyped-up craze that enables rich people to show their clout. With price tags in the hundreds of thousands of dollars, NFTs like Bored Apes and CryptoPunks",
    likes: 10,
    img: "https://picsum.photos/id/180/300",
    tags: ["tech", "beauty", "lifestyle", "travel", "trending"],
  },
];

const sections = [
  {
    title: "Trending",
    tag: "trending",
  },
  {
    title: "Most Liked",
    tag: "mostliked",
  },
  {
    title: "Recent Posts",
    tag: "latest",
  },
];

const blogs = [
  {
    name: "Tim Sneath",
    img: "https://picsum.photos/id/30/300",
    followers: 22,
  },
  {
    name: "John Snow",
    img: "https://picsum.photos/id/50/300",
    followers: 40,
  },
  {
    name: "Tim Will",
    img: "https://picsum.photos/id/76/300",
    followers: 30,
  },
  {
    name: "Alex Hanna",
    img: "https://picsum.photos/id/12/300",
    followers: 20,
  },
  {
    name: "John Clark",
    img: "https://picsum.photos/id/121/300",
    followers: 100,
  },
];

const topics = [
  "Technology",
  "Beauty",
  "Lifestyle",
  "Travel",
  "Finance",
  "Business",
  "Sales",
  "Marketing",
  "UI/UX",
  "Education",
  "News",
  "Entertainment",
  "Food",
  "Fashion",
  "Relationships",
  "Gaming",
].map((t) => ({
  name: t,
  followers: Math.round(Math.random() * 100),
}));

export { posts, sections, blogs, topics };
