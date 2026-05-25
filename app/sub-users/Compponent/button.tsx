export default function BotButton({img2color, img1, img2, title}: {img2color: string, img1: string, img2: string, title: string}) {
    return (
        <div className="flex justify-between gap-3">
            <img src={img1} className="bg-white active:scale-98 hover:scale-110 transition-normal duration-200 w-13 h-13 rounded-full p-3 shadow-[20px_80px_250px_35px_rgba(0,0,250,50)]"/>
            <div className="flex bg-linear-to-l from-purple-700 from-1% to-blue-700 to-99% via-50% hover:via-cyan-400 hover:scale-102 transition-normal duration-200 w-full h-13 rounded-full p-2 gap-2 justify-center items-center shadow-[0px_0px_0px_0px_rgba(0,0,250,0.2)] hover:shadow-[5px_5px_13px_0px_rgba(0,0,250,0.2)] active:scale-98">
                <div className={`w-6 h-6 ${img2color}`} style={{ maskImage: `url('${img2}')`, maskRepeat: "no-repeat", maskPosition: "center", maskSize: "contain"}}></div>
                <p className="text-center text-white text-[13px]">{title}</p>
            </div>
        </div>
    );
}