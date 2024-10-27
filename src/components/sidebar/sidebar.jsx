import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links";
import ToggleButton from "./toggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 48px 48px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 48px 48px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="flex flex-col items-center justify-center bg-white text-black sidebar_wrapper" animate={open ? "open" : "closed"}>
      <motion.div className="z-[999] fixed top-0 bottom-0 left-0 bg-white w-96" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;