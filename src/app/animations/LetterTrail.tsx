"use client";
import useMousePosition from "@/hooks/useMousePosition";
import { useEffect, useState } from "react";

const SENTENCES = ["Hi how are you?", "Are you having a good day?", "How's the weather?", "The chicken or the egg?", "Do you like this animation?"]

const LetterTrail = () => {
  const { ref, mouseX, mouseY } = useMousePosition();
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [lastLetterPosition, setLastLetterPosition] = useState({ x: 0, y: 0 });

  const nextLetter = () => {
    const sentence = SENTENCES[sentenceIndex];
    if (letterIndex < sentence.length - 1) {
      setLetterIndex(letterIndex + 1);
    } else {
      setSentenceIndex((prevIndex) => (prevIndex + 1) % SENTENCES.length);
      setLetterIndex(0);
    }
  }

  const updateLetterPosition = () => {
    setLastLetterPosition({ x: mouseX, y: mouseY });
  }

  const renderLetterOnScreen = (letter: string) => {
    if (!ref.current) return;
    const letterDiv = document.createElement('div');
    letterDiv.textContent = letter;
    letterDiv.classList.add("trail-letter");
    letterDiv.style.position = "absolute";
    letterDiv.style.left = `${mouseX}px`;
    letterDiv.style.top = `${mouseY}px`;

    ref.current.appendChild(letterDiv);
    nextLetter();
    updateLetterPosition();
    setTimeout(() => {
      if (!ref.current) return;
      ref.current.removeChild(letterDiv);
    }, 2000); // disappear after 2 seconds
  }

  useEffect(() => {
    const sentence = SENTENCES[sentenceIndex];
    const letter = sentence[letterIndex];
    const distance = Math.sqrt(Math.pow(mouseX - lastLetterPosition.x, 2) + Math.pow(mouseY - lastLetterPosition.y, 2));
    if (letter && distance >= 20) {
      renderLetterOnScreen(letter);
    }
  }, [mouseX, mouseY, sentenceIndex, letterIndex, lastLetterPosition]);

  return (
    <div ref={ref} className="animation-container flex items-center justify-center">
      <div className="max-w-[10ch] font-shrikhand text-center text-4xl opacity-10">
        Move your mouse here
      </div>
    </div>
  )
}

export default LetterTrail;