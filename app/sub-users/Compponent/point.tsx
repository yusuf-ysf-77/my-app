export default function Point({header, img}: {header: string, img: string}) {
    return (
        <div className="flex justify-between items-center border-b-[1.5] h-13">
            <h1 className="text-[16px] text-black font-semibold">{header}</h1>
            <img src={img} className="w-5 h-5 active:scale-98 hover:scale-120 transition"/>
        </div>
    );
}