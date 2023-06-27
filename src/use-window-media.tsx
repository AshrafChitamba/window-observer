import { useCallback, useEffect, useState } from 'react';
import { Width } from './types';

/** This hook will return a boolean of
 *  the type of device width media you
 * want to target
 * */
export const useWindowMedia = (width: Width = 640) => {
  const [matchMedia, setMatchMedia] = useState(
    window.matchMedia(`(max-width: ${width}px)`).matches
  );

  // checking the device width
  const checkDeviceWidth = useCallback(() => {
    const isTrue = window.matchMedia(`(max-width: ${width}px)`).matches;

    if (isTrue) setMatchMedia(true);
    else setMatchMedia(false);
  }, []);

  //   controlling the state
  useEffect(() => {
    window.addEventListener('resize', checkDeviceWidth);

    return () => {
      window.removeEventListener('resize', checkDeviceWidth);
    };
  }, [matchMedia]);


  return matchMedia;
};
