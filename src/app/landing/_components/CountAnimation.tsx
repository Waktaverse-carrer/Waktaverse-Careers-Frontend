import { useMotionValue, useTransform, motion, animate } from 'framer-motion';
import { useEffect } from 'react';

export default function CounterAnimation({ value }: { value: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const controls = animate(count, value, { duration: 1 });
    return () => controls.stop();
  }, []);

  return <motion.div style={{ display: 'inline' }}>{rounded}</motion.div>;
}
