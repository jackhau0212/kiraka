"use client";

import React, { useEffect, useState } from "react";


export const LandingDemo = () => {
  const [highlightedTextIndex, setHighlightedTextIndex] = useState(-1);
  const texts =
    "Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO. It is an adaptation of A Song of Ice and Fire, a series of fantasy novels by George R. R. Martin, the first of which is A Game of Thrones. The show premiered on HBO in the United States on April 17, 2011, and concluded on May 19, 2019, with 73 episodes broadcast over eight seasons. Set on the fictional continents of Westeros and Essos, Game of Thrones has a large ensemble cast and follows several story arcs throughout the course of the show. The first major arc concerns the Iron Throne of the Seven Kingdoms of Westeros through a web of political conflicts among the noble families either vying to claim the throne or fighting for independence from whoever sits on it. The second focuses on the last descendant of the realm's deposed ruling dynasty, who has been exiled to Essos and is plotting to return and reclaim the throne. The third follows the Night's Watch, a military order defending the realm against threats from beyond Westeros' northern border.".split(
      " "
    );

  useEffect(() => {
    const inverval = setInterval(() => {
      setHighlightedTextIndex((prev) => (prev + 1) % texts.length);
    }, 20);

    return () => clearInterval(inverval);
  }, [texts.length]);

  return (
    <div className="text-white flex justify-between">
      <div className="w-1/2 flex justify-center">
        <h1>text</h1>
      </div>
      <div className="w-1/2 flex justify-center">
        <div className="text-box bg-[#b0c2ea] overflow-auto">
          {texts.map((text, index) => (
            <span
              key={index}
              className={
                index === highlightedTextIndex
                  ? "highlighted-text"
                  : index < highlightedTextIndex
                  ? "transparent-text"
                  : ""
              }
            >
              {text + " "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
