import Image from "next/image";

const ResearchItem = ({ imageSrc, title, authors, links, forum }) => {
    return (
        <div className="flex gap-6 items-center md:items-start">
            <Image
                src={imageSrc}
                alt="Project icon"
                width={100}
                height={100}
                className="rounded-md aspect-square shadow-sm h-full border-1 border-base-300 z-40"
            />
            <div>
                <h1 className="font-semibold">{title}</h1>
                <p className="text-gray-500">
                    {authors.map((author, idx) => (
                        <span key={idx} className={author.isHighlighted ? "font-semibold" : ""}>
                            {author.name}
                            {idx < authors.length - 1 && ", "}
                        </span>
                    ))}
                </p>
                <p className="text-blue-500 flex flex-wrap gap-4">
                    {links.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline opacity-75 hover:opacity-100 transition-opacity duration-200"
                        >
                            {link.label}
                        </a>
                    ))}
                </p>
                <p className="text-gray-500">{forum}</p>
            </div>
        </div>
    );
};

export default ResearchItem;
