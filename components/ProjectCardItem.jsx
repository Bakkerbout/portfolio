import {Link} from "react-router";

function ProjectCardItem({to, img, title, role, description}) {
    return (
        <Link to={to} className="group w-full md:w-1/3 flex flex-col">
            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            <div className="flex flex-col flex-grow">
                <h2 className="font-bold text-center mt-4 text-xl text-[#1C352D]">
                    {title}
                </h2>
                <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#4A7A6A] mb-1">
                    {role}
                </p>
                <p className="text-center text-sm text-gray-600 px-2 line-clamp-2">
                    {description}
                </p>
            </div>
        </Link>
    );
}

export default ProjectCardItem;