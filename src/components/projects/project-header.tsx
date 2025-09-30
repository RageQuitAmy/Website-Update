import CurseForge from "../icons/curseforge";
import GitHub from "../icons/github";
import Modrinth from "../icons/modrinth";

type ProjectHeaderProps = {
    name: string;
    description: string;
    slug: string;
    curseForgeSlug?: string;
    modrinthSlug?: string;
    githubSlug?: string;
};

const ProjectHeader = ({
    name,
    description,
    slug,
    curseForgeSlug,
    modrinthSlug,
    githubSlug,
}: ProjectHeaderProps) => {
    return (
        <div className="mb-8 flex flex-col md:flex-row md:items-center gap-4">
            <div className="size-24 md:size-32 flex-shrink-0">
                <img
                    src={`/img/projects/${slug}.webp`}
                    alt={name}
                    className="rounded-lg"
                />
            </div>
            <div>
                <h1 className="m-0 text-4xl md:text-5xl leading-10 text-white">
                    {name}
                </h1>
                <p className="m-0 mt-2 text-lg text-gray-200">{description}</p>
                <div className="mt-4 flex flex-wrap gap-4">
                    {curseForgeSlug && (
                        <a
                            href={`https://www.curseforge.com/minecraft/${curseForgeSlug}`}
                            className="hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <CurseForge />
                        </a>
                    )}
                    {modrinthSlug && (
                        <a
                            href={`https://modrinth.com/${modrinthSlug}`}
                            className="hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Modrinth />
                        </a>
                    )}
                    {githubSlug && (
                        <a
                            href={`https://github.com/${githubSlug}`}
                            className="hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHub />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectHeader;