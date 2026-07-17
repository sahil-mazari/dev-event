interface EventCardProps {
  id: string;
  title: string;
  imageUrl: string;
  slug?: string;
  location?: string;
  date?: string;
  time?: string;
}
export const events: EventCardProps[] = [
  {
    id: "1",
    title: "React Conference 2024",
    imageUrl: "/images/event1.png",
    slug: "react-conference-2024",
    location: "San Francisco, CA",
    date: "2024-03-15",
    time: "09:00 AM",
  },
  {
    id: "2",
    title: "Next.js Summit",
    imageUrl: "/images/event2.png",
    slug: "nextjs-summit",
    location: "New York, NY",
    date: "2024-04-20",
    time: "10:00 AM",
  },
  {
    id: "3",
    title: "JavaScript Meetup",
    imageUrl: "/images/event3.png",
    slug: "javascript-meetup",
    location: "Los Angeles, CA",
    date: "2024-05-15",
    time: "06:00 PM",
  },
];
