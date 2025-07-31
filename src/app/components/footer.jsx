import Image from "next/image";
import { FaLinkedin, FaGithub, FaRegFileLines, FaHeart } from "react-icons/fa6";
import FooterItem from "./FooterItem";


const Footer = () => {
    return (
        <footer className="w-full mt-8 bg-base-200 shadow-inner z-50 text-sm md:text-base">
            <div className="container h-22  md:h-16 mx-auto flex flex-col md:flex-row items-center 
            gap-4 md:gap-8 justify-center md:justify-between px-4 md:px-8 xl:max-w-[1280px]">

                {/* Made with section */}
                <div className="order-2 md:order-1 flex items-center gap-1">
                    <p>Made with</p>
                    <FaHeart className="text-secondary" />
                    <p>and Next.js</p>
                </div>


                {/* Contact links */}
                <div className="order-1 md:order-2 flex flex-row items-center gap-2 md:gap-6" id="contact">
                    <FooterItem href="https://github.com/Jookare">
                        <FaGithub className="h-5 w-5 md:h-6 md:w-6 mr-1" />
                        Github
                    </FooterItem>

                    <FooterItem href="https://www.linkedin.com/in/joona-kareinen/">
                        <FaLinkedin className="h-5 w-5 md:h-6 md:w-6 mr-1" />
                        LinkedIn
                    </FooterItem>

                    <FooterItem href="https://lut-my.sharepoint.com/:b:/g/personal/joona_kareinen_lut_fi/Ea6pxib14jtBii4gTsOU65EBUTHwPadm0dFhJ561NucGUg?e=FfPhbK">
                        <FaRegFileLines className="h-5 w-5 md:h-6 md:w-6 mr-1" />
                        CV
                    </FooterItem>
                </div>

            </div>
        </footer>
    );
};

export default Footer;