

export default function Learnpage() {
    return (
    <section className="h-screen bg-gray-100 flex p-8 gap-8">
        <div className="bg-purple-200 p-8 h-70 w-80 rounded-4xl flex flex-col justify-between text-purple-800">
            <div className="flex gap-4">
                <img src="/palette.svg" alt="Pelette" />
                <p className="font-bold ">Design</p>
            </div>
            <div>
                <p className="text-4xl font-bold">FIGMA</p>
                <p className="font-bold">8 Hour ago</p>
            </div>
        </div>

        <div className="bg-orange-200 p-8 h-70 w-80 rounded-4xl flex flex-col justify-between text-orange-800">
            <div className="flex gap-4">
                <img src="/palette.svg" alt="Pelette" />
                <p className="font-bold">Codding</p>
            </div>
            <div>
                <p className="text-4xl font-bold">PYTHON</p>
                <p className="font-bold">2 days ago</p>
            </div>
        </div>

        <div className="bg-red-200 p-8 h-70 w-80 rounded-4xl flex flex-col justify-between text-red-800">
            <div className="flex gap-4">
                <img src="/palette.svg" alt="Pelette" />
                <p className="font-bold">Desaign</p>
            </div>
            <div>
                <p className="text-4xl font-bold">Sketch</p>
                <p className="font-bold">4 days ago</p>
            </div>
        </div>
    </section>
        );
}
