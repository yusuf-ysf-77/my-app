import LineChartComponent from "./line";
import Pie from "./pie";
import TableComponent from "./table";

export default function Page() {
    return (
        <div className="bg-gray-100 h-screen w-screen gap-5 flex flex-col items-center justify-center">
            <div className="flex items-center justify-end gap-15 h-40 w-250 p-5 rounded-4xl bg-linear-to-l from-blue-100 to-transparent shadow-[10px_10px_40px_0px_rgba(0,0,0,0.07)]">
                <Pie />
                <LineChartComponent />
            </div>
            <div>
                <TableComponent />
            </div>
        </div>
    );
}