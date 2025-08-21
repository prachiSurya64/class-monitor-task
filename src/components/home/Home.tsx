// import {
//   useReactTable,
//   flexRender,
//   getCoreRowModel,
//    type ColumnDef
// } from "@tanstack/react-table";

// type Person = {
//   id: number;
//   name: string;
//   age: number;
//   city: string;
//   email: string;
//   phone: string;
//   company: string;
//   department: string;
//   role: string;
//   status: string;
// };

// const data: Person[] = Array.from({ length: 10 }, (_, i) => ({
//   id: i + 1,
//   name: `Person ${i + 1}`,
//   age: 20 + i,
//   city: `City ${i + 1}`,
//   email: `person${i + 1}@mail.com`,
//   phone: `12345${i}`,
//   company: `Company ${i + 1}`,
//   department: `Dept ${i + 1}`,
//   role: `Role ${i + 1}`,
//   status: i % 2 === 0 ? "Active" : "Inactive",
// }));

// // Define columns with % widths
// const columns: ColumnDef<Person>[] = [
//   { accessorKey: "id", header: "ID", size: 10 },
//   { accessorKey: "name", header: "Name", size: 10 },
//   { accessorKey: "age", header: "Age", size: 10 },
//   { accessorKey: "city", header: "City", size: 10 },
//   { accessorKey: "email", header: "Email", size: 10 },
//   { accessorKey: "phone", header: "Phone", size: 10 },
//   { accessorKey: "company", header: "Company", size: 10 },
//   { accessorKey: "department", header: "Department", size: 10 },
//   { accessorKey: "role", header: "Role", size: 15 },
//   { accessorKey: "status", header: "Status", size: 15 },
// ];

// export default function Home() {
//   const table = useReactTable({
//     data,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//   });

//   return (
//     <div className="w-full p-4">
//       <table className="w-full border border-gray-300">
//         <thead>
//           {table.getHeaderGroups().map((headerGroup) => (
//             <tr key={headerGroup.id}>
//               {headerGroup.headers.map((header) => (
//                 <th
//                   key={header.id}
//                   className="border border-gray-300 p-2 text-left"
//                   style={{
//                     width: `${header.column.columnDef.size}%`,
//                   }}
//                 >
//                   {flexRender(
//                     header.column.columnDef.header,
//                     header.getContext()
//                   )}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody>
//           {table.getRowModel().rows.map((row) => (
//             <tr key={row.id}>
//               {row.getVisibleCells().map((cell) => (
//                 <td
//                   key={cell.id}
//                   className="border border-gray-300 p-2"
//                   style={{
//                     width: `${cell.column.columnDef.size}%`,
//                   }}
//                 >
//                   {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

import React from "react";
import {
  useReactTable,
  type ColumnDef,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";

type Person = {
  id: number;
  name: string;
  age: number;
  city: string;
  email: string;
  phone: string;
  company: string;
  department: string;
  role: string;
  status: string;
};

const data: Person[] = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `Person ${i + 1}`,
  age: 20 + i,
  city: `City ${i + 1}`,
  email: `person${i + 1}@mail.com`,
  phone: `12345${i}`,
  company: `Company ${i + 1}`,
  department: `Dept ${i + 1}`,
  role: `Role ${i + 1}`,
  status: i % 2 === 0 ? "Active" : "Inactive",
}));

const columns: ColumnDef<Person>[] = [
  { accessorKey: "id", header: "ID", size: 10 },
  { accessorKey: "name", header: "Name", size: 10 },
  { accessorKey: "age", header: "Age", size: 10 },
  { accessorKey: "city", header: "City", size: 10 },
  { accessorKey: "email", header: "Email", size: 10 },
  { accessorKey: "phone", header: "Phone", size: 10 },
  { accessorKey: "company", header: "Company", size: 10 },
  { accessorKey: "department", header: "Department", size: 10 },
  { accessorKey: "role", header: "Role", size: 15 },
  { accessorKey: "status", header: "Status", size: 15 },
];

export default function HomeNew() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  style={{ width: `${header.column.columnDef.size}%` }}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row, rowIndex) => (
            <tr key={row.id} className={rowIndex % 2 === 0 ? "even" : "odd"}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  style={{ width: `${cell.column.columnDef.size}%` }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
