type ProjectCardProps = {
    name: string;
    description: string;
    slug: string;
};

const ProjectCard = ({ name, description, slug }: ProjectCardProps) => {
    return (
        <a
            href={`/projects/${slug}`}
            className="grid grid-cols-[96px_1fr] grid-rows-[max-content_max-content] p-8 bg-[#232B46] [box-shadow:2px_-2px_0_2px_#384367,_-2px_2px_0_2px_#0E1735,_0_0_0_4px_#232B46] hover:[box-shadow:0_0_0_4px_#ffffff] gap-4 no-underline"
        >
            <div className="size-24">
                <img src={`img/projects/${slug}.webp`} alt={name} />
            </div>
            <div>
                <h3 className="m-0 text-3xl leading-8 text-white">{name}</h3>
            </div>
            <p className="m-0 col-span-2 text-lg text-gray-200">
                {description}
            </p>
        </a>
    );
};

export default ProjectCard;
