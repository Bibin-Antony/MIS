import { useState } from "react";
import News from "./News";
import Events from "./Events";

const NewsAndEvents = () => {
  const [news, setNews] = useState(true);

  return (
    <div className="bg-primary mt-20">
      <div className="grid grid-cols-2 ">
        <button
          onClick={() => setNews(true)}
          className={`${
            news ? "bg-primary" : "bg-white"
          } font-semibold tracking-wider text-2xl text-textSecondary  p-3 transition-all duration-300`}
        >
          News
        </button>
        <button
          onClick={() => setNews(false)}
          className={`${
            !news ? "bg-primary" : "bg-white"
          } font-semibold tracking-wider text-2xl text-textSecondary p-3 transition-all duration-300`}
        >
          Events
        </button>
      </div>

      {news ? <News /> : <Events />}
    </div>
  );
};

export default NewsAndEvents;
