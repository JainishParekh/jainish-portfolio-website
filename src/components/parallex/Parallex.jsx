import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="w-full h-full relative flex items-center justify-center overflow-hidden parallex_wrapper"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "bg-parallexDark"
            : "bg-parallexLight",
      }}
    >
      <motion.h1 style={{ y: yText }} className="text-[6rem]">
        {type === "skills" ? "What can I Do?" : "What I Did?"}
      </motion.h1>
      <motion.div className="bg-mountains bg-cover bg-bottom w-full h-full absolute z-[3] mountains_wrapper"></motion.div>
      <motion.div
        className={"bg-cover w-full h-full absolute z-[2]  planets_wrapper" + (type === "skills" ? ` bg-planets` : ` bg-sun`)}
        style={{
          y: yBg,
          // backgroundImage: `url(${
          //   type === "services" ? "/planets.png" : "/sun.png"
          // })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="bg-cover bg-stars bg-bottom w-full h-full absolute z-[1] stars_wrapper"></motion.div>
    </div>
  );
};

export default Parallax;