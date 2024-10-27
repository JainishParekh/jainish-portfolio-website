import { motion } from "framer-motion";
import Scroll from "../../assets/scroll.png";
import HeroImage from "../../assets/hero.png";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};
const sliderVariants = {
    initial: {
        x: 10,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 10,
        },
    },
};

function Hero() {
    return (
        <div className="bg-hero overflow-hidden relative h-full hero_wrapper">
            <div className="max-w-wrapper h-full m-auto ">
                <motion.div
                    className="w-1/2 h-full flex flex-col justify-center gap-10"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants} className="text-protfolio-name text-rebeccapurple">JAINISH PAREKH</motion.h2>
                    <motion.h1 className="text-portfolio-title" variants={textVariants}>
                        Web developer and Machine learning Enthusiast
                    </motion.h1>
                    <motion.div variants={textVariants} className="buttons_wrapper">
                        <motion.button className="p-5 border border-white rounded-md bg-transparent text-white mr-5 font-light cursor-pointer" variants={textVariants}>
                            See the Latest Works
                        </motion.button>
                        <motion.button className="p-5 border border-white rounded-md bg-transparent text-white mr-5 font-light cursor-pointer" variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img
                        variants={textVariants}
                        animate="scrollButton"
                        src={Scroll}
                        alt=""
                        className="w-[3rem]"
                    />
                </motion.div>
            </div>
            <motion.div
                variants={sliderVariants}
                initial="initial"
                animate="animate"
                className="absolute select-none bottom-16 -z-1 text-[40vh] text-backgroundText whitespace-nowrap w-full font-bold light_background_image"
            >
                Developer ∙ Innovator ∙ Hustler
            </motion.div>
            <div className="h-[80%] w-[50%] absolute top-0 right-0">
                <img className="h-full w-full object-fit" src={HeroImage} alt="" />
            </div>
        </div>
    );
};

export default Hero;