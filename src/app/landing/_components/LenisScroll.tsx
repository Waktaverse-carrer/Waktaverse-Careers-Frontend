'use client';

import { useEffect, useCallback, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import useWheel from '@/app/lib/useWheel';

export interface Props {
  children: React.ReactNode;
}

const DIVIDER_HEIGHT = 5;

export default function LenisScroll({ children }: Props) {
  const [curSection, setCurSection] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  const wheelHandler = useCallback(
    (ref: React.RefObject<HTMLDivElement>, deltaY: number, scrollTop: number) => {
      /**
       * 뷰포트 높이 값(100vh)
       */
      const pageHeight = window.innerHeight;
      if (deltaY > 0) {
        //스크롤 내릴 때
        console.log('스크롤 내림', scrollTop);
        const dest = Math.floor(scrollTop / pageHeight) + 1;
        setCurSection(dest);
        console.log(pageHeight * dest + DIVIDER_HEIGHT * dest);
        window.scrollTo({
          top: pageHeight * dest + DIVIDER_HEIGHT * dest,
          left: 0,
          behavior: 'smooth',
        });
      } else {
        // 스크롤 올릴 때
        const dest = Math.floor(scrollTop / pageHeight) - 1;
        setCurSection(dest);
        ref.current?.scrollTo({
          top: pageHeight * dest + DIVIDER_HEIGHT * dest,
          left: 0,
          behavior: 'smooth',
        });
      }
    },
    []
  );

  const outerDivRef = useWheel(wheelHandler);

  return (
    <main ref={outerDivRef} style={{ overflowY: 'hidden' }}>
      {children}
    </main>
  );
}
