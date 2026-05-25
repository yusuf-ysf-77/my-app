export default function Isi({ img, text, bg, tc, inv }:{ img: string; text: string; bg: string; tc: string; inv: string }) {
    return (
        <div className={`flex items-center ${bg} rounded w-full h-10.5`}>
            <div className="flex items-center ml-4">
                <img src={img} className={`w-6 ${inv}`} />
                <p className={`font-medium ml-4 text-[12px] font-sans ${tc}`}>{text}</p>
            </div>
        </div>
    );
}