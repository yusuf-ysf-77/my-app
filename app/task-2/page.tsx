
export default function Learnpage() {
    return (

    // layar Utama
    <section className="h-screen bg-gray-100 flex flex-col gap-7 p-40 justify-center items-center font-[ms reference sans serif]">


        {/* logo */}
        <section className="flex self-start fixed top-16 left-18 w-16 h-16 bg-[#c5c5c5] mask mask-[url('/help-triangle.svg')] mask-no-repeat mask-center mask-contain"></section>


        {/* Container 1 */}
        <section className="flex gap-7">

            {/* Box 1 */}
            <section className="bg-[#ecefff] p-11 h-90 w-135 justify-between rounded-4xl flex flex-col text-[#494f69]">

                {/* Header */}
                <div className="flex gap-3">
                    <div className="w-6 h-6 bg-[#494f69] mask mask-[url('/palette.svg')] mask-no-repeat mask-center mask-contain"></div>
                    <p className="font-bold text-[13px]">Design</p>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                    
                    {/* Title */}
                    <div>
                        <p className="text-[27px] font-bold align-self-end">Adobe Photoshop</p>
                    </div>

                    {/* Time & Poeple's Profiles */}
                    <div className="flex justify-between">

                        {/* Time */}
                        <div>
                            <p className="text-[13.5px] font-bold">in 3 days</p>
                        </div>

                        {/* Poeple's Profiles */}
                        <div className="flex">
                            <img src="/pp1.jpg" className="w-9 h-9 rounded-full border-[#ecefff] border-3"/>
                            <img src="/pp2.jpg" className="w-9 h-9 rounded-full border-[#ecefff] border-3 -ml-4"/>
                            <img src="/pp3.jpg" className="w-9 h-9 rounded-full border-[#ecefff] border-3 -ml-4"/>
                            <p className="bg-[#d9dbeb] w-9 h-9 rounded-full border-[#ecefff] border-3 -ml-4 font-bold text-[10px] flex items-center justify-center">9+</p>
                        </div>

                    </div>
                
                </div>

            </section>

            {/* Box 2 */}
            <section className="bg-[#d7fde3] p-11 h-90 w-135 justify-between rounded-4xl flex flex-col text-[#166063]">

                {/* Header & Favorite */}
                <div className="flex justify-between">

                    {/* Header */}
                    <div className="flex gap-3">
                        <div className="w-6 h-6 bg-[#186a6d] mask mask-[url('/terminal-2.svg')] mask-no-repeat mask-center mask-contain"></div>
                        <p className="font-bold text-[13px]">AI</p>
                    </div>

                    {/* Favorite */}
                    <div className="w-4 h-4 bg-[#186a6d] mask mask-[url('/carambola.svg')] mask-no-repeat mask-center mask-contain"></div>

                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                    
                    {/* Title */}
                    <div>
                        <p className="text-[27px] font-bold align-self-end">DALL·E 2, Midjourney, Stable Diffusion</p>
                    </div>

                    {/* Time & Poeple's Profiles */}
                    <div className="flex justify-between">

                        {/* Time */}
                        <div>
                            <p className="text-[13.5px] font-bold">in 5 days</p>
                        </div>

                        {/* Poeple's Profiles */}
                        <div className="flex">
                            <img src="/pp4.jpg" className="w-9 h-9 rounded-full border-[#d7fde3] border-3"/>
                            <img src="/pp5.jpg" className="w-9 h-9 rounded-full border-[#d7fde3] border-3 -ml-4"/>
                            <img src="/pp6.jpg" className="w-9 h-9 rounded-full border-[#d7fde3] border-3 -ml-4"/>
                            <p className="bg-[#cee4c8] w-9 h-9 rounded-full border-[#d7fde3] border-3 -ml-4 font-bold text-[10px] flex items-center justify-center">3+</p>
                        </div>

                    </div>

                </div>

            </section>

        </section>


        {/* Container 2 */}
        <section className="flex gap-7">

            {/* Box 1 */}
            <div className="bg-[#f7dcfa] p-11 h-80 w-87.5 rounded-4xl flex flex-col justify-between text-[#4c005f]">
                
                {/* Header */}
                <div className="flex gap-3">
                    <div className="flex gap-3 w-6 h-6 bg-[#4c005f] mask mask-[url('/palette.svg')] mask-no-repeat mask-center mask-contain"></div>
                    <p className="font-bold text-[13px]">Design</p>
                </div>
                
                {/* Content Title & Time */}
                <div className="flex flex-col gap-1">

                    {/* Title */}
                    <p className="text-[27px] font-bold">Figma</p>

                    {/* Time */}
                    <p className="text-[13.5px] font-bold">8 hours ago</p>

                </div>
            
            </div>

            {/* Box 2 */}
            <div className="bg-[#ffe7e3] p-11 h-80 w-87.5 rounded-4xl flex flex-col justify-between text-[#703600]">
                
                {/* Header */}
                <div className="flex gap-3">
                    <div className="w-6 h-6 bg-[#703600] mask mask-[url('/code.svg')] mask-no-repeat mask-center mask-contain"></div>
                    <p className="font-bold text-[13px]">Codding</p>
                </div>
                
                {/* Content Title & Time */}
                <div className="flex flex-col gap-1">

                    {/* Title */}
                    <p className="text-[27px] font-bold">Python</p>

                    {/* Time */}
                    <p className="text-[13.5px] font-bold">2 days ago</p>

                </div>
            
            </div>

            {/* Box 3 */}
            <div className="bg-[#ffdde7] p-11 h-80 w-87.5 rounded-4xl flex flex-col justify-between text-[#6e0000]">
                
                {/* Header */}
                <div className="flex gap-3">
                    <div className="w-6 h-6 bg-[#6e0000] mask mask-[url('/palette.svg')] mask-no-repeat mask-center mask-contain"></div>
                    <p className="font-bold text-[13px]">Design</p>
                </div>
                
                {/* Content Title & Time */}
                <div className="flex flex-col gap-1">

                    {/* Title */}
                    <p className="text-[27px] font-bold">Sketch</p>

                    {/* Time */}
                    <p className="text-[13.5px] font-bold">4 days ago</p>

                </div>
            
            </div>
        
        </section>

        
        {/* Page */}
        <section className="flex self-end fixed bottom-16 right-18">
            <p className="text-[20px] font-bold text-[#adadad]">Day 020 / 365</p>
        </section>
    
    </section>
        );
}
