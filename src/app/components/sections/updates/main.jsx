import Image from "next/image";
import NewsItem from "./item";
const News = () => {
    return (
        <div className="w-full flex flex-col  justify-start items-start my-4 text-sm md:text-base"  id="updates">
            <h1 className="text-2xl md:text-3xl  font-medium mb-2">Updates</h1>
            {/* <ul className="list-inside list-disc ml-8">
                <li>July 2025: Attend the International Computer Vision Summer School (ICVSS 2025) in Sicily!</li>
                <li>April 2025: Paper accepted to CVPR 2025 workshop!</li>
                <li>Aug 2024: Paper accepted to ECCV 2024 workshop!</li>
                <li>July 2024: Start PhD position.</li>
            </ul> */}
            <ul className="timeline timeline-vertical">
                <NewsItem date={"July 2025"} title={"Attended the International Computer Vision Summer School (ICVSS 2025) in Sicily!"}  bot />
                <NewsItem date={"Apr 2025"} title={"Paper accepted to CVPR 2025 workshop!"} top bot />
                <NewsItem date={"Aug 2024"} title={"Paper accepted to ECCV 2024 workshop!"} top bot />
                <NewsItem date={"Aug 2024"} title={"Attended ML for Atmospheric Science Summer School"} top bot />
                <NewsItem date={"July 2024"} title={"Started PhD position"} top />
            </ul>
        </div>
    )
}

export default News;