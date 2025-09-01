import Image from "next/image";
import ResearchItem from "./item";
const Research = () => {
    return (
        <div className="w-full flex flex-col justify-start items-start my-4 text-sm md:text-base" id="research">
            <h1 className="text-2xl md:text-3xl font-medium mb-2">Research</h1>
            <div className="flex flex-col gap-2">
                <p className="text-gray-500 font-semibold">Journal Articles & Conference Papers</p>
                <div className="flex flex-col gap-4">

                    <ResearchItem
                        imageSrc="/pub2.png"
                        title="Self-Supervised Pretraining for Fine-Grained Plankton Recognition"
                        authors={[
                            { name: "Joona Kareinen", isHighlighted: true },
                            { name: "Tuomas Eerola" },
                            { name: "Kaisa Kraft" },
                            { name: "Lasse Lensu" },
                            { name: "Sanna Suikkanen" },
                            { name: "Heikki Kälviäinen" },
                        ]}
                        links={[
                            { label: "Paper", href: "https://arxiv.org/abs/2503.11341" },
                            { label: "Code", href: "https://github.com/Jookare/self-supervised-plankton" },
                        ]}
                        forum="CVPR 2025, FGVC12 workshop"
                    />
                    <ResearchItem
                        imageSrc="/pub1.png"
                        title="Open-Set Plankton Recognition"
                        authors={[
                            { name: "Joona Kareinen", isHighlighted: true },
                            { name: "Annaliina Skyttä" },
                            { name: "Tuomas Eerola" },
                            { name: "Kaisa Kraft" },
                            { name: "Lasse Lensu" },
                            { name: "Sanna Suikkanen" },
                            { name: "Maiju Lehtiniemi" },
                            { name: "Heikki Kälviäinen" },
                        ]}
                        links={[
                            { label: "Paper", href: "https://arxiv.org/abs/2503.11318" },
                            { label: "Code", href: "https://github.com/Jookare/open-set-plankton-recognition" },
                        ]}
                        forum="ECCV 2024, OOD-CV workshop"
                    />

                </div>

                <p className="text-gray-500 font-semibold mt-2">Theses</p>
                <div className="flex flex-col gap-4">
                    <ResearchItem
                        imageSrc="/plankton2.png"
                        title="Open-set plankton detection"
                        authors={[
                            { name: "Joona Kareinen", isHighlighted: true },
                            { name: "Tuomas Eerola" },
                            { name: "Ernst C. Wit" },
                        ]}
                        links={[
                            { label: "Paper", href: "https://lutpub.lut.fi/handle/10024/167615" },
                        ]}
                        forum="Master's Thesis"
                    />
                    <ResearchItem
                        imageSrc="/norppa2.png"
                        title="User interface for Saimaa ringed seal re-identification"
                        authors={[
                            { name: "Joona Kareinen", isHighlighted: true },
                            { name: "Ekaterina Nepovinnykh" },
                            { name: "Tuomas Eerola" }
                        ]}
                        links={[
                            { label: "Paper", href: "https://lutpub.lut.fi/handle/10024/164141" },
                        ]}
                        forum="Bachelor's Thesis"
                    />
                </div>

            </div>
        </div>
    )
}

export default Research;
