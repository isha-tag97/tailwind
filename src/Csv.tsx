// import React from "react";
// import { CSVLink } from "react-csv";

// const Csv = () => {
//   const data = [
//     { id: 1, name: "Isha", email: "21bmiit093@gmail.com" },
//     { id: 2, name: "Patel", email: "patel28@gmail.com" },
//   ];

//   const csv = [
//     { label: "ID", key: "id" },
//     { label: "Name", key: "name" },
//     { label: "Email", key: "email" },
//   ];

//   return (
//     <div>
//       <CSVLink data={data} headers={csv} filename="data.csv">
//       <div className="flex justify-center items-center">
//   <button className="bg-pink-300 text-black px-8 py-2 rounded-sm">
//     CSV
//   </button>
// </div>

//       </CSVLink>
//     </div>
//   );
// };

// export default Csv;





import React, { useRef } from "react";
import { CSVLink } from "react-csv";
import { useReactToPrint } from "react-to-print";

const ExportData = () => {
  const data = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
  ];

  const csvHeaders = [
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
  ];

  const tableRef = useRef(null);


  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
    documentTitle: "User Data",
  });

  return (
    <div>
      <h2>Export Data</h2>

      <div ref={tableRef}>
        <table border={1} cellPadding={5} cellSpacing={0}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button onClick={handlePrint}>
        Export to PDF
      </button>
      <CSVLink data={data} headers={csvHeaders} filename="data.csv">
        <button>Export to CSV</button>
      </CSVLink>
    </div>
  );
};

export default ExportData;









