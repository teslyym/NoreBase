import { useState } from "react";
import DataTable from "react-data-table-component";

function App() {
  const columns = [
    {
      name: "Coin",
      selector: (row) => row.coin,
    },
    {
      name: "Code",
      selector: (row) => row.code,
    },
    {
      name: "Price",
      selector: (row) => row.price,
    },
    {
      name: "TotalSupply",
      selector: (row) => row.totalsupply,
    },
  ];
  return (
    <>
      <div>
        <h1>NoreBase Cryptocurrency</h1>

        <div className=" container mt-7">
          <DataTable
            columns={columns}
            data={data}
            pagination
            defaultSortBy={{ id: "coin", desc: false }}
            noHeader
          />
        </div>
      </div>
    </>
  );
}

export default App;
