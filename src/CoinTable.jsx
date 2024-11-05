import React from "react";

const CoinTable = ({ coin, code, price, totalSupply }) => {
  return (
    <tr className>
      <td className="p-2">{coin}</td>
      <td className="p-2">{code}</td>
      <td className="p-2">{price}</td>
      <td className="p-2">{totalSupply}</td>
    </tr>
  );
};

export default CoinTable;
