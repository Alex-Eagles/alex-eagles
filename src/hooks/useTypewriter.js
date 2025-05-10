// src/hooks/useTypewriter.js
import { useState, useEffect, useRef } from "react";

export default function useTypewriter(
  text,
  { deleteSpeed = 50, typeSpeed = 50, initialDelay = 300 } = {}
) {
  const [displayed, setDisplayed] = useState("");
  const prevText = useRef(text);
  const timeouts = useRef([]);

  useEffect(() => {
    // clear any running timeouts
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];

    // helper to schedule a change
    const schedule = (fn, delay) => {
      const id = setTimeout(fn, delay);
      timeouts.current.push(id);
    };

    // if it’s the very first render of this text, just type it
    if (prevText.current === text) {
      schedule(() => setDisplayed(text), initialDelay);
    } else {
      // 1) delete previous text
      for (let i = prevText.current.length; i >= 0; i--) {
        schedule(() => setDisplayed(prev => prev.slice(0, i)), (prevText.current.length - i) * deleteSpeed);
      }
      // 2) type new text
      for (let i = 1; i <= text.length; i++) {
        schedule(() => setDisplayed(text.slice(0, i)), prevText.current.length * deleteSpeed + i * typeSpeed);
      }
    }

    prevText.current = text;

    // cleanup on unmount or next text-change
    return () => timeouts.current.forEach(clearTimeout);
  }, [text, deleteSpeed, typeSpeed, initialDelay]);

  return displayed;
}
