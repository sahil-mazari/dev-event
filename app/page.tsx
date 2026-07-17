import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
import { events } from "@/lib/content";

const Page = () => {
  return (
    <section>
      <h1 className="text-center">The Hub for Every Dev Events </h1>
      <p className="text-lg text-center mt-5">
        Welcome to DevEvent, the ultimate destination for developers seeking to
      </p>
      <ExploreBtn />
      <div className="mt-10 text-center">
        <h3 className="text-2xl font-semibold mb-4">Upcoming Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-gray-700/20 shadow-md rounded-lg p-4 mb-4 max-w-md mx-auto"
            >
              <EventCard
                key={event.id}
                title={event.title}
                imageUrl={event.imageUrl}
                slug={event.slug}
                location={event.location}
                date={event.date}
                time={event.time}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
