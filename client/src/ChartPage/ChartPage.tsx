import React, { useState, useEffect } from "react";
import { Pie } from "@ant-design/plots";
import axios from "axios";
import "./chartPage.scss";
import { CityData } from "../types/types";

function ChartPage() {
  const chartDataURl = "http://localhost:3001/chartData";
  const [cityData, setCityData] = useState<CityData[]>([]);
  useEffect(() => {
    axios
      .get(chartDataURl)
      .then((res) => setCityData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const config = {
    appendPadding: 10,
    data: cityData,
    angleField: "percentage",
    colorField: "city",
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      style: {
        fontSize: 16,
        textAlign: "center",
      },
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };

  return (
    <div className="chartCont">
      <h2>City Statistics</h2>
      {/* @ts-ignore */}
      <Pie {...config} />
    </div>
  );
}

export default ChartPage;
