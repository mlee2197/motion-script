"use client";
import { ChangeEvent, useState } from 'react';

const TextScramble = () => {
  const [inputValue, setInputValue] = useState('');
  const [scrambledValue, setScrambledValue] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (isAnimating) return;
    setInputValue(e.target.value);
    setScrambledValue(e.target.value);
  };

  const scrambleTextOnce = async (index: number) => {
    const originalPart = inputValue.substring(0, index);
    const scrambledPart = inputValue.substring(index).split('').map(() => {
      const randomChar = String.fromCharCode(33 + Math.floor(Math.random() * 94)); // Includes lowercase, uppercase, and symbols
      return randomChar;
    }).join('');
    const scrambled = originalPart + scrambledPart;
    setScrambledValue(scrambled);
    return new Promise(resolve => setTimeout(resolve, 100));
  }

  const scrambleTextMultiple = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsAnimating(true);
    for (let i = 0; i < inputValue.length; i++) {
      await scrambleTextOnce(i);
    }
    setIsAnimating(false);
  };

  return (
    <form onSubmit={scrambleTextMultiple} className="animation-container flex flex-col items-center justify-center">
      <div className='relative bg-gray-750 text-2xl mx-auto overflow-hidden'>
        <input
          id="scramble-input"
          type="text"
          maxLength={20}
          placeholder="Type something..."
          value={inputValue}
          onChange={handleInputChange}
          autoComplete="off"
          className='block w-full border-0 p-4 bg-transparent tracking-wide'
        />
        {isAnimating && (
          <div id="scrambled-text" className='absolute top-0 left-0 flex items-center w-max h-full p-4 bg-gray-750 text-center tracking-wide pointer-events-none'>
            {scrambledValue}
          </div>
        )}
      </div>
      <button type="submit" className="px-2 py-1 bg-gray-300 text-black rounded mt-6 active:bg-gray-400">Scramble</button>
    </form>
  );
};

export default TextScramble;