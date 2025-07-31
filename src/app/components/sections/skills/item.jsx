import Image from "next/image";
const SkillItem = ({ date, title, top, bot }) => {

    // stripe-bg box-border shadow-md border-b-2 border-t-0 border-x-0 border-neutral-100"
    return (
        <div className="flex flex-col aspect-square w-full text-xs
            ring-2 ring-gray-500 rounded-2xl transition-all 
            duration-300 hover:scale-105 cursor-pointer 
            items-center justify-center text-gray-500 group">
            <Image
                src="/logos/python.svg"
                alt="Python (Mono)"
                width={320}
                height={320}
                className="w-12 h-12 opacity-60 group-hover:opacity-100 transition-all duration-300"
            />
            <p className="group-hover:text-base-content transition-all duration-300">Python</p>
        </div>
    )
}
// #6a7282
export default SkillItem;

