'use client';

import type { FC, PropsWithChildren } from 'react';
import { type MotionProps, motion } from 'framer-motion';

interface Props {
  delay: number;
}

const TableRow: FC<PropsWithChildren<Props>> = ({ delay, children }) => {
  const transition: MotionProps = {
    initial: { y: 10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.35, delay },
  };

  return <motion.li {...transition}>{children}</motion.li>;
};

export default TableRow;
