export default function Where({title, fill, color}: {title: string, fill: string, color: string}) {
    return (
        <div className="flex justify-between">
            <p className="text-black font-semibold">{title}</p>
            <p className={`${color} text-[13px]`}>{fill}</p>
        </div>
    );
}