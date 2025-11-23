import { useEffect, useState } from 'react';

export const LoadingScreen = ({onComplete}) => {
  const [text, setText] = useState('');
  const fullText = `JAADev`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
            onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]); //Only run once on mount

  return (
    <div className="Loading flex flex-col items-center">
      <div className="mb-4 text-4xl font-bold">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>
    </div>
  );
};
