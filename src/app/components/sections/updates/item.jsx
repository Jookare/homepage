
const newsItem = ({ date, title, top, bot }) => {

    // stripe-bg box-border shadow-md border-b-2 border-t-0 border-x-0 border-neutral-100"
    return (
        <li style={{ '--timeline-col-start': '6em', '--timeline-col-end': '1fr' }}>
            {top && <hr className="py-2" />}
            <div className="timeline-start ">{date}</div>
            <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            <div className="timeline-end timeline-box hover:border-primary duration-200 flex-1  text-sm md:text-base cursor-pointer">{title}</div>
            {bot && <hr className="py-2" />}
        </li>
    )
}

export default newsItem;

