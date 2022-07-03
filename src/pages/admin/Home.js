import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import Chart from './Chart';

function Home(){
    const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "March",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/order/income");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            {name:MONTHS[item._id-1],"Active Price": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);
    return( 
            <Chart
            data={userStats}
            title="Sales Analytics"
            grid
            dataKey="Active Price"
            />
    )
}
export default Home