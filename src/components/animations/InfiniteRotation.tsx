import React from "react";
import { motion } from "framer-motion";

export default function InfiniteRotation(props: { children: React.ReactNode, duration: number }) {
  const { children ,duration} = props;
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
    >
      {children}
    </motion.div>
  );
}
