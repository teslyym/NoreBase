import React from "react";

const MobileTable = ({ coin, code, price, totalSupply }) => {
  return (
    <tr className>
      <td className="p-2">
        <div>
          <strong>Coin</strong>
          <span className="block"> {coin}</span>
        </div>
        <div>
          <strong>Code</strong>
          <span className="block"> {code}</span>
        </div>
      </td>
      <td className="p-2">
        <div>
          <strong>Price</strong>
          <span className="block"> {price}</span>
        </div>
        <div>
          <strong>Total Supply</strong>
          <span className="block"> {totalSupply}</span>
        </div>
      </td>
    </tr>
  );
};
export default MobileTable;
