import React, { useState, useEffect } from 'react';
import { getDailyData } from '../../api';

import style from './Chart.module.css';
import { Line, Bar } from 'react-chartjs-2';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState();

  const getDaily = async () => {
    const daily = await getDailyData();
    setDailyData(daily);
  };

  const lineChart =
    dailyData && dailyData.length ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [
            {
              data: dailyData.map(({ confirmed }) => confirmed),
              label: 'Infected',
              borderColor: '#3333ff',
              fill: true,
            },
            {
              data: dailyData.map(({ deaths }) => deaths),
              label: 'Deaths',
              borderColor: 'red',
              backgroundColor: 'rgba(255,0,0,0.5)',
              fill: true,
            },
          ],
        }}
      />
    ) : null;

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'People',
            backgroundColor: [
              'rgba(0, 0, 255, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(255, 0, 0, 0.5)',
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  useEffect(() => {
    getDaily();
  }, []);

  return (
    <div className={style.container}>{country ? barChart : lineChart}</div>
  );
};

export default Chart;
