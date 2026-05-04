export default function Learnpage() {
    return (

        <section className="flex h-screen w-screen bg-gray-200 justify-center items-center">
            <section className="flex flex-col relative w-110 h-125 bg-white rounded-3xl p-6 justify-between">
                <div className="flex justify-between items-center border-b-2 h-13">
                    <p className="text-[16px] text-black font-semibold">Client details</p>
                    <img src="/x.svg" className="w-5 h-5"/>
                </div>

                <div className="flex gap-3">
                    <img src="/pp.png" className="flex rounded-full w-15 h-15"/>
                    <div className="flex flex-col gap-1">
                        <p className=" text-[15px] text-black font-bold">Cornelius Greenfelder</p>
                        <div className="rounded-full flex gap-2 bg-green-200 w-23 h-6 justify-center items-center">
                            <img src="/verified.svg" className=" w-4 h-4"/>
                            <p className="text-black text-[11px]">Verified</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-2xl justify-center flex flex-col gap-3 items-center w-95 h-30">
                    <p className="text-black font-semibold self-start">Projects</p>
                    <div className="flex gap-23 self-start">
                        <div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-4 h-4 bg-blue-600 mask mask-[url('/hourglass-empty.svg')] mask-no-repeat mask-center mask-contain"></div>
                                <p className="text-gray-600 text-[13px]">Ongoing</p>
                            </div>
                            <div className="flex gap-1.5 text-black text-[17px]">
                                <p className="font-semibold">2</p>
                                <p className=" text-gray-600">($3.8k)</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-4 h-4 bg-green-600 mask mask-[url('/square-check.svg')] mask-no-repeat mask-center mask-contain"></div>
                                <p className="text-gray-600 text-[13px]">Completed</p>
                            </div>
                            <div className="flex gap-1.5 text-[17px]">
                                <p className=" text-black font-semibold">25</p>
                                <p className=" text-gray-600">($54k)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between">
                    <p className="text-black font-semibold">Location</p>
                    <p className="text-gray-600 text-[13px]">United States, New York</p>
                </div>

                <div className="flex justify-between">
                    <p className="text-black font-semibold">With us</p>
                    <p className="text-gray-600 text-[13px]">6 Jan 2024</p>
                </div>

                <div className="flex justify-between">
                    <img src="/dots-vertical.svg" className="bg-gray-200 w-13 h-13 rounded-full p-3"/>
                    <div className="flex bg-blue-600 w-82 h-13 rounded-full p-2 gap-2 justify-center items-center">
                        <div className="w-6 h-6 bg-white mask mask-[url('/mail.svg')] mask-no-repeat mask-center mask-contain"></div>
                        <p className="text-center text-white text-[13px]">Message</p>
                    </div>
                </div>

            </section>
        </section>

    );
}