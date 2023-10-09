import { useState, useEffect } from 'react';
import { Direction } from './types';

/** This hook will return a direction of
 *  the current user scroll either upward 
 * or downward or undefined if the user is 
 * at the top of the page or page start
 * */
export const useScrollDirection = () => {
  const [direction, setDirection] = useState<Direction>(undefined);
  const [lastScrollPos, setlastScrollPos] = useState(0);

  // checking the user scroll direction
  const detectScrollDirection = () => {
    var currentPos = window.scrollY;

    if (currentPos > 0) {
      if (currentPos > lastScrollPos) setDirection(() => 'downwards');
      else setDirection(() => 'upwards');

      setlastScrollPos(currentPos);
    } else setDirection(() => undefined);
  };

  // effect for scrolling
  useEffect(() => {
    window.addEventListener('scroll', detectScrollDirection);

    return () => {
      window.removeEventListener('scroll', detectScrollDirection);
    };
  }, [window.scrollY]);

  return direction;
};
