import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';
window.ApexCharts = ApexCharts; // For legacy code
const IncomeExpenseChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!window.ApexCharts || !chartRef.current) {
      console.warn('ApexCharts not found on window or chart container missing.');
      return;
    }

    const options_income_expense = {
      chart: {
        type: 'bar',
        height: 400,
        toolbar: { show: false },
      },
      series: [
        {
          name: 'Income',
          data: [50000, 100000, 20000, 50000, 50000, 5000, 50000, 1000, 5000, 70000, 10000, 99944],
        },
        {
          name: 'Expense',
          data: [5000, 10000, 2005, 5000, 5005, 5400, 5600, 1800, 560, 7000, 1200, 9992],
        },
      ],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        title: { text: 'Month' },
      },
      yaxis: {
        title: { text: 'SAR' },
      },
      colors: ['#e600ff', '#002fff'],
      dataLabels: { enabled: false },
      stroke: { curve: 'smooth' },
    };

    const chart = new window.ApexCharts(chartRef.current, options_income_expense);
    chart.render();

    return () => chart.destroy();
  }, []);

  return <div ref={chartRef} id="this_year_income_expense_chart" className="w-100" />;
};

export default IncomeExpenseChart;
