import { motion } from "framer-motion";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";

const Example = () => {
  return (
    <section className="grid place-content-center bg-neutral-900 p-12">
      <AnimatedButton />
    </section>
  );
};

const AnimatedButton = () => {
  return (
    <motion.button
      aria-label="Start your journey"
      initial={{
        transform: "translateY(0px)",
        opacity: 0,
      }}
      animate={{
        transform: "translateY(-20px)",
        opacity: 1,
      }}
      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration: 2,
        ease: "easeInOut",
      }}
      className="rounded-lg border-[1px] bg-white py-2 px-6 text-sm font-medium text-violet-500 backdrop-blur hover:bg-violet-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
    >
      Get Started
    </motion.button>
  );
};

export default Example;
