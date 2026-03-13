export function TimelineItem({title, role, period, isLast}) {
    return (
        <div className={isLast ? "mt-14" : ""}>
            <h4 className="text-2xl font-semibold mb-5">{title}</h4>
            <h4 className="text-xl mb-5">{role}</h4>
            <p className="text-xl font-light italic">{period}</p>
        </div>
    );
}