"use client";
import Image from "next/image";
const ExploreBtn = () => {
  return (
    <div>
      <button
        className="px-4 py-2 mt-7 mx-auto bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300 text-center block"
        onClick={() => console.log("Explore button clicked!")}
      >
        <a href="/explore" className="text-white no-underline">
          Explore Events
          <Image
            src="/icons/arrow-down.svg"
            alt="Arrow Down"
            className="inline-block ml-2 w-4 h-4"
            width={24}
            height={24}
          />
        </a>
      </button>
    </div>
  );
};

export default ExploreBtn;
