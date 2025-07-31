import Image from "next/image";
const TeachingItem = ({ course, university, role }) => {

    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-col sm:flex-row w-full lg:w-4/5 justify-between">
                <p className=" font-semibold">{course}</p>
                <p className="text-gray-500">{university}</p>
            </div>
            <p>{role}</p>

        </div>
    )
}

export default TeachingItem;

