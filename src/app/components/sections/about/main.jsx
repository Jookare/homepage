import Image from "next/image";
import { GiMountainClimbing } from "react-icons/gi";

const About = () => {
    return (
        <div className="w-full flex flex-col  justify-center items-start my-4 pt-20 text-sm md:text-base" id="about">
            <h1 className="text-2xl md:text-3xl  font-medium mb-2">About</h1>
            <div className="flex flex-col md:flex-row gap-4 md:items-center">

                <Image
                    aria-hidden
                    src="/img.jpg"
                    alt="profile picture"
                    width={150}
                    height={150}
                    className="rounded-md z-40"
                />
                <p className="text-normal text-pretty">
                    Hi! I am a second-year PhD student at{" "}
                    <a href="https://www.lut.fi/en"
                        target="_blank" rel="noopener noreferrer"
                        className="text-blue-500 hover:underline">
                        Lappeenranta University of Technology
                    </a>
                    , supervised by Tuomas Eerola.
                    I work on machine learning methods for fine-grained classification, particularly for applications in plankton recognition.
                    I previously graduated from a double degree master program between LUT University and{" "}
                    <a href="https://www.usi.ch/en"
                        target="_blank" rel="noopener noreferrer"
                        className="text-blue-500 hover:underline">
                        Università della Svizzera Italiana
                    </a>
                    . In my free time, I like to do sports, especially bouldering 
                    <GiMountainClimbing className="inline-flex items-center ml-[1px] h-4 w-4"/>.
                </p>
            </div>

        </div>
    )
}

export default About;