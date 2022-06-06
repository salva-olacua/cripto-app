import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import { labels as _labels } from "../canvas/labels";
import { data as _data } from "../canvas/data";
import "./Canvas.css";

const getData = (labels, data) => {
  return {
    labels,
    datasets: [
      {
        label: "price",
        backgroundColor: "rgb(255, 99, 133, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        data: data,
        fill: true,
      },
    ],
  };
};

const getConfig = (data) => {
  return {
    type: "line",
    data: data,
    options: {
      elements: {
        point: { radius: 1}
      },
      scales: {
        x: { display: false },
        y: { display: false },
      },
      plugins: {
        legend: { display: false },
      },
    },
  };
};

const Canvas = ({ labels=_labels, data=_data }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    const chart = new Chart(context, getConfig(getData(labels, data)));

    return () => { chart.destroy(); };
  }, [labels, data]);

  return (
    <div className="Canvas">
      <canvas className="center" ref={canvasRef} />
    </div>
  );
};

export default Canvas;
