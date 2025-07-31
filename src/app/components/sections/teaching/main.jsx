import Image from "next/image";
import TeachingItem from "./item";
const Teaching = () => {
    return (
        <div className="w-full flex flex-col  justify-start items-start my-4 gap-4 text-sm md:text-base" id="teaching">
            <div className="flex flex-col w-full">
                <h1 className="text-2xl md:text-3xl  font-medium mb-2">Teaching</h1>
                <div className="flex flex-col gap-2">
                    <p className="text-gray-500 font-semibold">Courses</p>
                    <TeachingItem course="3D Computer Vision (Spring 2025)" university="LUT University" role="Teaching Assitant" />
                    <TeachingItem course="Numerical Methods (Spring 2023)" university="LUT University" role="Teaching Assitant" />
                    <TeachingItem course="Mathematics III (Spring 2022)" university="LUT University" role="Teaching Assitant" />
                    <TeachingItem course="Differential Calculation (Fall 2021)" university="LUT University" role="Teaching Assitant" />
                    <TeachingItem course="Basics of University Mathematics (Fall 2020)" university="LUT University" role="Teaching Assitant" />
                </div>
            </div>
        </div>
    )
}

export default Teaching;