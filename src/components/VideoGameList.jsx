import React from "react";

const games = [
  {
    title: "Mass Effect",
    studio: "Bioware",
    releaseYear: 2007,
  },
  {
    title: "The Last of Us",
    studio: "Naughty Dog",
    releaseYear: 2013,
  },
  {
    title: "Final Fantasy XIV",
    studio: "Square Enix",
    releaseYear: 2013,
  },
];

function VideoGameList() {
  return (
    <ul role="list" className="divide-y divide-gray-100 max-w-3xl mx-auto">
      {games.map((game) => (
        <li key={game.title} className="flex justify-between gap-x-6 py-5">
          <div className="flex flex-col">
            <p className="text-xl font-semibold leading-6 text-gray-900">
              {game.title}
            </p>
            <div className="flex mt-1 text-sm leading-5 text-gray-500">
              <span className="mr-2">{game.studio}</span>
              <span>{game.releaseYear}</span>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <button className="text-blue-500 hover:text-blue-700">Edit</button>
            <button className="text-red-500 hover:text-red-700">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default VideoGameList;
