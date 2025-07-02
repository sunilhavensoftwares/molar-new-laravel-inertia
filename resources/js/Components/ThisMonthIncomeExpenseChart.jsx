import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';
window.ApexCharts = ApexCharts; // For legacy code
const ThisMonthIncomeExpenseChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!window.ApexCharts || !chartRef.current) {
      console.warn('ApexCharts not found on window or chart container missing.');
      return;
    }

    const options_income_expense = {
       chart: {
                type: 'donut',
                height: 350,
            },
            series: [50000, 5005],
            labels: ['Income', 'Expense'],
            colors: ['#50CD89', '#F1416C'],
            plotOptions: {
                pie: {
                    donut: {
                        size: '60%',
                        labels: {
                            show: true,
                            name: {
                                show: true
                            },
                            value: {
                                show: true
                            }
                        }
                    }
                }
            },
            stroke: {
                show: true,
                curve: 'smooth',
                colors: ['#fff'],
                width: 2
            },
            legend: {
                position: 'bottom'
            }
    };

    const chart = new window.ApexCharts(chartRef.current, options_income_expense);
    chart.render();

    return () => chart.destroy();
  }, []);

  return <div ref={chartRef} id="this_month_income_expense" className="w-100" />;
};

export default ThisMonthIncomeExpenseChart;
