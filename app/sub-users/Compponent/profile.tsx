export default function Profile({photo, name, badge, imgbadge}: {photo: string, name: string, badge: string, imgbadge: string}) {
    return (
        <div className="flex gap-3">
            <img src={photo} className="flex rounded-full w-15 h-15 active:scale-90 transition-all "/>
            <div className="flex flex-col gap-1">
                <p className=" text-[15px] text-black font-bold">{name}</p>
                <div className="rounded-full flex gap-2 bg-green-200 w-23 h-6 justify-center items-center">
                    <img src={imgbadge} className="w-4 h-4" />
                    <p className="text-black text-[11px]">{badge}</p>
                </div>
            </div>
        </div>
    );
}