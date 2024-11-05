import React, { useEffect, useState } from "react";
import CoinTable from "../CoinTable";
import MobileTable from "../MobileTable";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const isMobile = useMediaQuery({
    query: "(max-width: 600px)",
  });

  console.log(isMobile);

  useEffect(() => {
    const fetchCoins = async () => {
      const response = await fetch("https://api.coinlore.net/api/tickers/");
      const data = await response.json();
      setCoins(
        data.data.map((coin) => ({
          price: `$${coin.price_usd}`,
          code: coin.symbol,
          totalSupply: `${coin.tsupply} ${coin.symbol}`,
          coin: coin.name,
        }))
      );
    };
    fetchCoins();
  }, []);

  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < coins.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const currentData = coins.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="max-w-[800px] mx-auto my-6 shadow-lg rounded-lg overflow-hidden">
      <h1 className="flex justify-center">NoreBase Cryptocurrency</h1>
      {!isMobile ? (
        <table className="w-full">
          <thead>
            <tr className="p-2">
              <th className="text-left">💰 Coin</th>
              <th className="text-left">📜 Code</th>
              <th className="text-left">Price</th>
              <th className="text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((coin, index) => (
              <CoinTable key={index} {...coin} />
            ))}
          </tbody>
        </table>
      ) : (
        <table>
          <tbody>
            {currentData.map((coin, index) => (
              <MobileTable key={index} {...coin} />
            ))}
          </tbody>
        </table>
      )}

      <div className="flex justify-between p-2">
        <button onClick={handlePrevious} disabled={currentPage === 0}>
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={(currentPage + 1) * itemsPerPage >= coins.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
