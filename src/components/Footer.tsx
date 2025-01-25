
import { FacebookIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import {motion} from "motion/react"

const Footer = () => {
  return (
    <footer className="bg-[#0E3343] text-white py-6">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 text-center">
        <div className="flex justify-center items-center gap-6 mb-4">
          <motion.a
            whileHover={{ scale: 1.5, transition: { duration: 0.5, type:"spring" } }}
            href="https://github.com/aadi1094"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F4A261] transition "
          >
            <GithubIcon className="w-6 h-6" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.5, transition: { duration: 0.5, type:"spring" } }}
            href="https://x.com/aditya_chawale"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F4A261] transition "
          >
            <TwitterIcon className="w-6 h-6" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.5, transition: { duration: 0.5, type:"spring" } }}
            href="https://www.linkedin.com/in/aditya-chawale-722838296/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F4A261] transition "
          >
            <LinkedinIcon className="w-6 h-6" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.5, transition: { duration: 0.5, type:"spring" } }}
            href="https://www.facebook.com/freefire.pro.39982"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F4A261] transition "
          >
            <FacebookIcon className="w-6 h-6" />
          </motion.a>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Aditya Chawale. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
