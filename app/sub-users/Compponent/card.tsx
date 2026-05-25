import DetailCard from "./detail/detail-card";

export default function Card({hover, hover1, header, imgcolor, img, title, qty, price, img1color, img1, title1, qty1, price1}: {hover: string, hover1: string, header: string, imgcolor: string, img: string, title: string, qty: number, price: number, img1color: string, img1: string, title1: string, qty1: number, price1: number}): import("react/jsx-runtime").JSX.Element {
    return (
        <div className="bg-blue-50 p-4.5 rounded-2xl justify-between flex flex-col w-full h-32">
            <p className="text-black font-semibold">{header}</p>
            <div className="flex gap-25 self-start">
                <DetailCard
                hover={hover}
                color={imgcolor} 
                img={img} 
                title={title} 
                qty={qty} 
                price={price}/>
                <DetailCard 
                hover={hover1}
                color={img1color}
                img={img1} 
                title={title1} 
                qty={qty1} 
                price={price1}/>
            </div>
        </div>
    );
}