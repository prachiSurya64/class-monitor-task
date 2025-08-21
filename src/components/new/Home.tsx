import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
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

const data: Person[] = [
  {
    id: 1,
    name: "Person 1",
    age: 20,
    city: "City 1",
    email: "person1@example.com",
    phone: "+91-9810000000",
    company: "Company 1",
    department: "Dept 1",
    role: "Role 1",
    status: "Active",
  },
  {
    id: 2,
    name: "Person 2",
    age: 25,
    city: "City 2",
    email: "person2@example.com",
    phone: "+91-9810000001",
    company: "Company 2",
    department: "Dept 2",
    role: "Role 2",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Person 3",
    age: 30,
    city: "City 3",
    email: "person3@example.com",
    phone: "+91-9810000002",
    company: "Company 3",
    department: "Dept 3",
    role: "Role 3",
    status: "Active",
  },
  {
    id: 4,
    name: "Person 4",
    age: 28,
    city: "City 4",
    email: "person4@example.com",
    phone: "+91-9810000003",
    company: "Company 4",
    department: "Dept 4",
    role: "Role 4",
    status: "Inactive",
  },
  {
    id: 5,
    name: "Person 5",
    age: 35,
    city: "City 5",
    email: "person5@example.com",
    phone: "+91-9810000004",
    company: "Company 5",
    department: "Dept 5",
    role: "Role 5",
    status: "Active",
  },
  {
    id: 6,
    name: "Person 6",
    age: 22,
    city: "City 6",
    email: "person6@example.com",
    phone: "+91-9810000005",
    company: "Company 6",
    department: "Dept 6",
    role: "Role 6",
    status: "Inactive",
  },
  {
    id: 7,
    name: "Person 7",
    age: 27,
    city: "City 7",
    email: "person7@example.com",
    phone: "+91-9810000006",
    company: "Company 7",
    department: "Dept 7",
    role: "Role 7",
    status: "Active",
  },
  {
    id: 8,
    name: "Person 8",
    age: 40,
    city: "City 8",
    email: "person8@example.com",
    phone: "+91-9810000007",
    company: "Company 8",
    department: "Dept 8",
    role: "Role 8",
    status: "Inactive",
  },
  {
    id: 9,
    name: "Person 9",
    age: 32,
    city: "City 9",
    email: "person9@example.com",
    phone: "+91-9810000008",
    company: "Company 9",
    department: "Dept 9",
    role: "Role 9",
    status: "Active",
  },
  {
    id: 10,
    name: "Person 10",
    age: 29,
    city: "City 10",
    email: "person10@example.com",
    phone: "+91-9810000009",
    company: "Company 10",
    department: "Dept 10",
    role: "Role 10",
    status: "Inactive",
  },
];


const columns: ColumnDef<Person>[] = [
  { accessorKey: "id", header: "ID", size: 10 },
  { accessorKey: "name", header: "Name", size: 10 },
  { accessorKey: "age", header: "Age", size: 10 },
  { accessorKey: "city", header: "City", size: 8 },
  { accessorKey: "email", header: "Email", size: 8 },
  { accessorKey: "phone", header: "Phone", size: 8 },
  { accessorKey: "company", header: "Company", size: 8 },
  { accessorKey: "department", header: "Department", size: 8 },
  { accessorKey: "role", header: "Role", size: 15 },
  { accessorKey: "status", header: "Status", size: 15 },
];

export default function Home() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="table-container">
      <table>
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
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  style={{ width: `${cell.column.columnDef.size}%` }}
                  title={cell.getValue() as string} 
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

