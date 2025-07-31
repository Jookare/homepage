const FooterItem = ({ href, children }) => {
    return (
        <a
            className="flex items-center hover:underline opacity-75 hover:opacity-100 transition-opacity duration-200"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    );
};

export default FooterItem;