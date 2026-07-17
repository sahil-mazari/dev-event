import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <header className="bg-gray-800/30 text-white p-4 flex justify-between items-center">
      <nav className="flex space-x-4">
        <Link href="/" className="logo">
          <Image
            src="/icons/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          DevEvent
        </Link>

        <ul>
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/events" className="hover:text-gray-400">
            Events
          </Link>
          <Link href="/create-event" className="hover:text-gray-400">
            Create Event
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
