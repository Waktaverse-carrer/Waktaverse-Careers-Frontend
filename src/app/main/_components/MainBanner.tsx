import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  overflow: hidden;
  width: 1722px;
  height: 400px;
  border-radius: 20px;
  position: relative;

  margin-top: 18px;
  margin-bottom: 70px;
`;

const Slide = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;

  cursor: pointer;
`;

const images = ['/images/main-banner-1.png', '/images/main-banner-2.png'];

export function MainBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % images.length),
      5000
    );
    return () => clearInterval(interval); // 메모리 누수 방지
  }, []);

  return (
    <Container>
      <AnimatePresence>
        {images.map(
          (src, index) =>
            currentIndex === index && (
              <Slide
                key={index}
                src={src}
                initial={{ x: '100%' }}
                animate={{ x: '0%' }}
                exit={{ x: '-100%' }}
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
              />
            )
        )}
      </AnimatePresence>
    </Container>
  );
}
