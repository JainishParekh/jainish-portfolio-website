import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
    const ref = useRef(null);
    const circleRef = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });
    const { scrollYProgress } = useScroll({ target: circleRef });
    const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

    return (
        <>
            <motion.div
                className="relative bg-hero text-white min-h-screen flex flex-col px-40 pb-10 h-screen justify-center items-center">
                <motion.h1
                    style={{ y }}
                    className="text-[40px] font-bold text-center mt-4 mb-1 py-4 px-6 rounded-full bg-yellow-600 text-white tracking-widest">
                    SKILLS
                </motion.h1>
                {/* <h2 className="font-normal mt-2 mb-2">Your Subtitle</h2>
                <p className="mb-4 text-lg">Some paragraph text goes here.</p> */}

                <svg ref={circleRef} id="progress" width="100" height="100" viewBox="0 0 100 100" className="absolute top-40 left-40 transform -rotate-90">
                    <circle cx="50" cy="50" r="30" pathLength="1" className="stroke-white opacity-30 fill-none [stroke-width:15%] [stroke-dashoffset:0]" />
                    <motion.circle
                        cx="50"
                        cy="50"
                        r="30"
                        pathLength="1"
                        className="stroke-white fill-none [stroke-width:15%] [stroke-dashoffset:0]"
                        style={{ pathLength: scrollXProgress }}
                    />
                </svg>

                <ul ref={ref} className="flex items-center overflow-x-scroll h-full p-5 gap-12 w-full">
                    {["ReactJs", "NextJs", "Angular", "NodeJs", "Django", "MongoDb", "SQL", "AWS DynamoDb", "Tensorflow", "Pytorch", "Pandas", "Data Visulaization"].map((skill, index) => (
                        <motion.li
                            whileHover={{
                                scale: 1.07,
                                transition: { duration: 0.25 },
                            }}
                            whileTap={{ scale: 0.9 }}
                            key={index}
                            className="flex-shrink-0 p-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-blue-200 font-bold text-[80px] last:mr-0">
                            {skill}
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </>
    )
}

export default Skills;