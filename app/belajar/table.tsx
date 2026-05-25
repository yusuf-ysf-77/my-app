export default function TableComponent() {

  return (
<div className="rounded-4xl overflow-hidden border-[1.7px] border-gray-200">
    <table className="border-collapse border-gray-200 text-sm text-black shadow-[10px_10px_40px_0px_rgba(0,0,0,0.07)]">

      <thead className="border-b border-gray-200">

        <tr className="bg-linear-to-l from-blue-100 to-white divide-x divide-gray-200">

          <th className="p-4  w-20">
            Name
          </th>

          <th className="p-4  w-50">
            Score
          </th>

        </tr>

      </thead>

      <tbody className="divide-y divide-gray-200 text-center">

        <tr className="bg-gray-50 divide-x divide-gray-200">

          <td className="p-4 ">
            Ucup
          </td>

          <td className="p-4 ">
            70
          </td>

        </tr>
        <tr className="bg-gray-50 divide-x divide-gray-200">

          <td className="p-4 ">
            Pucuk
          </td>

          <td className="p-4 ">
            95
          </td>

        </tr>
        <tr className="bg-gray-50 divide-x divide-gray-200">

          <td className="p-4 ">
            Kuncup
          </td>

          <td className="p-4 ">
            80
          </td>

        </tr>

      </tbody>

    </table>
</div>
  )
}