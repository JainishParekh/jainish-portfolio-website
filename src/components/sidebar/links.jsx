import { motion } from "framer-motion";

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};
const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    },
};

function Links() {
    const items = [
        { label: "Home", id: "homepage" },
        { label: "Skills", id: "skills" },
        { label: "Experience", id: "experience" },
        { label: "Portfolio", id: "portfolio" },
        { label: "Contact", id: "contact" }
    ];

    return (
        <motion.div className="absolute flex flex-col items-center justify-center gap-5 w-full h-full links_wrapper" variants={variants}>
            {items.map((item) => (
                <motion.a
                    href={`#${item.id}`}
                    key={item.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-4xl"
                >
                    {item.label}
                </motion.a>
            ))}
        </motion.div>
    );
};

export default Links;