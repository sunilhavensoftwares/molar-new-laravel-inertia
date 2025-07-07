import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';
window.ApexCharts = ApexCharts; // For legacy code
const PharmacySalesChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!window.ApexCharts || !chartRef.current) {
      console.warn('ApexCharts not found on window or chart container missing.');
      return;
    }

    const options_income_expense = {
                chart: {
                    type: 'line', // You can change this to 'bar' if preferred
                    height: 400,
                    toolbar: {
                        show: false
                    }
                },
                title: {
                    text: "Today's Sales (Hourly)",
                    align: 'left'
                },
                series: [{
                    name: 'Sales',
                    data: [50, 100, 200, 50, 50, 50, 50, 100, 50, 70, 10, 10, 20] // sales data
                }],
                xaxis: {
                    categories: [
                        '8 AM', '9 AM', '10 AM', '11 AM', '12 PM',
                        '1 PM', '2 PM', '3 PM', '4 PM', '5 PM',
                        '6 PM', '7 PM', '8 PM'
                    ],
                    title: {
                        text: 'Hour of Day'
                    }
                },
                yaxis: {
                    categories: [
                        200000, 400000, 600000, 800000, 1000000
                    ],
                    title: {
                        text: 'SAR'
                    }
                },
                colors: ['#00c9a7'],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                }
            };;

    const chart = new window.ApexCharts(chartRef.current, options_income_expense);
    chart.render();

    return () => chart.destroy();
  }, []);

  return <div ref={chartRef} id="this_year_income_expense_chart" className="w-100" />;
};

export default PharmacySalesChart;
