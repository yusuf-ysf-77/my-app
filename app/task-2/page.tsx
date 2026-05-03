
export default function Learnpage() {
    return (
    
        <section className="bg-black flex justify-center items-center w-screen h-screen">

            <section className="relative w-250.5 h-188 bg-gray-100 flex flex-col gap-4.5 justify-center items-center font-sans font-semibold">

                <div className="flex gap-5">

                    <div className="bg-[#dcf7fa] p-7.75 h-63 w-93 justify-between rounded-3xl flex flex-col text-[#494f69]">

                        <div className="flex gap-2 items-center">
                            
                            <div className="w-4 h-4 bg-[#494f69] mask mask-[url('/palette.svg')] mask-no-repeat mask-center mask-contain"></div>
                            <p className="text-[9.5px]">Design</p>

                        </div>

                        <div className="flex flex-col gap-1">
                            
                            <p className="text-[18.75px] align-self-end">Adobe Photoshop</p>

                            <div className="flex justify-between items-center">

                                <p className="text-[9.5px] font-bold">in 3 days</p>

                                <div className="flex">
                                    
                                    <img src="pp1.jpg" className="w-6.5 h-6.5 rounded-full border-[#ecefff] border-2"/>
                                    <img src="pp2.jpg" className="w-6.5 h-6.5 rounded-full border-[#ecefff] border-2 -ml-3.25"/>
                                    <img src="pp3.jpg" className="w-6.5 h-6.5 rounded-full border-[#ecefff] border-2 -ml-3.25"/>
                                    <p className="bg-[#d9dbeb] w-6.5 h-6.5 rounded-full border-[#ecefff] border-2 -ml-3.25 text-[6px] flex items-center justify-center">9+</p>

                                </div>

                            </div>
                        
                        </div>

                    </div>

                    <div className="bg-[#dbfde5] p-8 h-63 w-93 justify-between rounded-3xl flex flex-col text-[#166063]">

                        <div className="flex justify-between items-center">

                            <div className="flex gap-2">

                                <div className="w-4 h-4 bg-[#186a6d] mask mask-[url('/terminal-2.svg')] mask-no-repeat mask-center mask-contain"></div>
                                <p className="text-[9.5px]">AI</p>

                            </div>

                            <div className="w-3 h-3 bg-[#186a6d] mask mask-[url('/carambola.svg')] mask-no-repeat mask-center mask-contain"></div>

                        </div>

                        <div className="flex flex-col gap-1">

                            <p className="text-[18.75px] align-self-end">DALL·E 2, Midjourney, Stable Diffusion</p>

                            <div className="flex justify-between items-center">

                                <p className="text-[9.5px]">in 5 days</p>

                                <div className="flex">

                                    <img src="pp4.jpg" className="w-6.5 h-6.5 rounded-full border-[#dbfde5] border-2"/>
                                    <img src="pp5.jpg" className="w-6.5 h-6.5 rounded-full border-[#dbfde5] border-2 -ml-3.25"/>
                                    <img src="pp6.jpg" className="w-6.5 h-6.5 rounded-full border-[#dbfde5] border-2 -ml-3.25"/>
                                    <p className="bg-[#cee4c8] w-6.5 h-6.5 rounded-full border-[#dbfde5] border-2 -ml-3.25 text-[6px] flex items-center justify-center">3+</p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="flex gap-4.5">

                    <div className="bg-[#f7dcfa] p-8 h-55 w-60.5 rounded-3xl flex flex-col justify-between text-[#4c005f]">
                        
                        <div className="flex gap-2 items-center">

                            <div className="w-4 h-4 bg-[#4c005f] mask mask-[url('/palette.svg')] mask-no-repeat mask-center mask-contain"></div>
                            <p className="text-[9.5px]">Design</p>

                        </div>
                        
                        <div className="flex flex-col gap-1">

                            <p className="text-[18.75px]">Figma</p>
                            <p className="text-[9.5px]">8 hours ago</p>

                        </div>
                    
                    </div>

                    <div className="bg-[#ffe5e3] p-8 h-55 w-60.5 rounded-3xl flex flex-col justify-between text-[#703600]">
                        
                        <div className="flex gap-2 items-center">

                            <div className="w-4 h-4 bg-[#703600] mask mask-[url('/code.svg')] mask-no-repeat mask-center mask-contain"></div>
                            <p className="text-[9.5px]">Codding</p>

                        </div>
                        
                        <div className="flex flex-col gap-1">

                            <p className="text-[18.75px]">Python</p>
                            <p className="text-[9.5px]">2 days ago</p>

                        </div>
                    
                    </div>

                    <div className="bg-[#ffdde7] p-8 h-55 w-60.5 rounded-3xl flex flex-col justify-between text-[#6e0000]">
                        
                        <div className="flex gap-2 items-center">

                            <div className="w-4 h-4 bg-[#6e0000] mask mask-[url('/palette.svg')] mask-no-repeat mask-center mask-contain"></div>
                            <p className="text-[9.5px]">Design</p>

                        </div>
                        
                        <div className="flex flex-col gap-1">

                            <p className="text-[18.75px]">Sketch</p>
                            <p className="text-[9.5px]">4 days ago</p>

                        </div>
                    
                    </div>
                
                </div>

                <p className="flex absolute bottom-12 right-10 text-[14px] text-[#adadad]">Day 020 / 365</p>
                <div className="flex absolute top-12 left-10 w-11 h-11 bg-[#c5c5c5] mask mask-[url('/help-triangle.svg')] mask-no-repeat mask-center mask-contain"></div>
            
            </section>

        </section>

    );
}
