import Isi from "./isi";

export default function Navbar() {
  return (
    <section className="w-screen h-screen bg-white flex items-center justify-center">
        <div className="w-60 h-140 bg-[#3d2350] p-5.5 flex flex-col gap-4 shadow-[0px_0px_20px_0px_rgba(0,0,0,0.4)] ">
            <p className="text-white text-2xl font-bold mb-4 flex justify-center font-sans">CodingLab</p>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                    <p className="text-white font-medium font-sans text-[12px] mb-2">Main Menu</p>
                    <Isi
                    bg="" 
                    img="/ds.svg"
                    text="Dashboard"
                    tc="text-white"
                    inv="invert"
                    />
                    <Isi
                    bg=""
                    img="/rp.svg"
                    text="Overview"
                    tc="text-white"
                    inv="invert"
                    />
                    <Isi 
                    bg=""
                    img="/an.svg"
                    text="Analytic"
                    tc="text-white"
                    inv="invert"
                    />
                </div>
                <div className="flex flex-col">
                    <p className="text-white font-medium font-sans text-[12px] mb-2">General</p>
                    <Isi
                    inv="" 
                    bg="bg-white"
                    img="/pr.svg"
                    text="Projects"
                    tc="text-black"
                    />
                    <Isi 
                    inv="invert"
                    bg=""
                    img="/gr.svg"
                    text="Groups"
                    tc="text-white"
                    />
                    <Isi 
                    inv="invert"
                    bg=""
                    img="/rp.svg"
                    text="Reports"
                    tc="text-white"
                    />
                </div>
                <div className="flex flex-col">
                    <p className="text-white font-medium font-sans text-[12px] mb-2">Account</p>
                    <Isi 
                    bg=""
                    img="/pr.svg"
                    text="Profile"
                    tc="text-white"
                    inv="invert"
                    />
                    <Isi 
                    bg=""
                    img="/st.svg"
                    text="Settings"
                    tc="text-white"
                    inv="invert"
                    />
                </div>
            </div>
        </div>
    </section>
  );
}