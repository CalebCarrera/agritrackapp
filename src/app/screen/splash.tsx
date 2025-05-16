
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Splash() {
  return (
    <div className="flex items-center justify-center h-screen bg-white dark:bg-black">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          className="dark:invert"
          src="/Logo.png"
          alt="logo"
          width={200}
          height={200}
          priority
        />
      </motion.div>
    </div>
  );
}

