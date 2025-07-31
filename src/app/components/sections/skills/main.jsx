import Image from "next/image";
import SkillItem from "./item";
const Skills = () => {
    return (
        <div className="w-full flex flex-col  justify-start items-start gap-4 my-4 text-sm md:text-base" >
            <h1 className="text-2xl md:text-3xl  font-medium mb-2">Highlighted Skills</h1>
            <div className="w-full grid grid-cols-10 gap-4">

                <SkillItem icon/>
                <SkillItem />
                <SkillItem />
                <SkillItem />
                <SkillItem />
                <SkillItem />
                <SkillItem />
                <SkillItem />
                <SkillItem />
                <SkillItem />
            </div>
        </div>
    )
}

export default Skills;