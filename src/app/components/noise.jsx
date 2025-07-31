const Noise = () => {

    return (
        <svg
            className="pointer-events-none fixed isolate z-25 opacity-40 mix-blend-plus-darker w-full h-full"
        >
            
            <filter id="noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="4" stitchTiles="stitch">
                </feTurbulence>
            </filter>
            <rect width="100vw" height="100vh" filter="url(#noise)"></rect>
        </svg>
    )
}

export default Noise;