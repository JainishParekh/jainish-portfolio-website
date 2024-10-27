import Sidebar from "../sidebar/sidebar";
import { motion } from "framer-motion";
import Github from "../../assets/github.png";
import Linkedin from "../../assets/linkedin.png";

function Navbar() { 
    return (
        <div className="h-navbar navbar_wrapper">
            {/* Sidebar */}
            <Sidebar />
            <div className="max-w-wrapper w-[90%] flex items-center justify-between m-auto ml-36 mr-12 h-full logo_name_wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg font-bold"
                >
                    JAINISH PAREKH
                </motion.span>
                <div className="flex gap-5 socials_wrapper">
                    <a href="#">
                        <img className="w-5 h-5" src={Github} alt="" />
                    </a>
                    <a href="#">
                        <img className="w-5 h-5" src={Linkedin} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;