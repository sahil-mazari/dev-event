import Link from "next/link";
import Image from "next/image";
interface EventCardProps {
  title: string;
  imageUrl: string;
  slug?: string;
  location?: string;
  date?: string;
  time?: string;
}
const EventCard = ({
  title,
  imageUrl,
  slug,
  location,
  date,
  time,
}: EventCardProps) => {
  return (
    <Link href={`/events/${slug}`} passHref>
      <Image
        src={imageUrl}
        alt={title}
        width={300}
        height={200}
        className="poster"
      />
      <p className="text-sm text-gray-400 mt-2 flex items-left">
        <Image
          src="/icons/pin.svg"
          alt="Location Icon"
          width={16}
          height={16}
          className="inline-block mr-1"
        />
        {location}
      </p>
      <h3 className="text-xl font-bold mt-2 text-left">{title}</h3>
      <div className="flex flex-row gap-2 items-left mt-2">
        <p className="text-sm text-gray-400 mt-2 flex items-left">
          <Image
            src="/icons/calendar.svg"
            alt="Date Icon"
            width={16}
            height={16}
            className="inline-block mr-1"
          />
          {date}
        </p>
        <p className="text-sm text-gray-400 mt-2 flex items-left">
          <Image
            src="/icons/clock.svg"
            alt="Time Icon"
            width={16}
            height={16}
            className="inline-block mr-1"
          />
          {time}
        </p>
      </div>
    </Link>
  );
};

export default EventCard;
