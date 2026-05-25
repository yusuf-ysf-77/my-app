export default function DetailCard({hover, color, img, title, qty, price,}: {hover: string, color: string, img: string, title: string, qty: number, price: number}) {
    return (
            <div className="flex gap-25 self-start">
                <div>
                    <div className="flex items-center gap-1.5">
                        <div className={`w-4 h-4 ${hover} ${color}`} style={{ maskImage: `url('${img}')`, maskRepeat: "no-repeat", maskPosition: "center", maskSize: "contain"}}></div>
                        <p className="text-gray-600 text-[13px]">{title}</p>
                    </div>
                    <div className="flex gap-1.5 text-black text-[17px]">
                        <p className="font-semibold">{qty}</p>
                        <p className=" text-gray-600">(${price}k)</p>
                    </div>
                </div>
            </div>
        
    );
}