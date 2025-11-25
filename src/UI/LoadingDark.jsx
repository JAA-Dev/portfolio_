import { useEffect, useState } from "react";

export const LoadingDark = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = `Welcome to the dark side!`;

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 800); // same timing as light mode
      }
    }, 120); // same typing speed as light mode

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-9999 p-4">
      <h1
        className="font-bold text-center
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
      >
        {text}
        <span className="animate-blink ml-1">|</span>
      </h1>
    </div>
  );
};
