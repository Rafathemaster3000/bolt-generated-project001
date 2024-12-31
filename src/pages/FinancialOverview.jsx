import React from 'react';
    import { Line, Bar } from 'react-chartjs-2';

    function FinancialOverview() {
      const revenueData = {
        labels: ['2019', '2020', '2021', '2022', '2023'],
        datasets: [
          {
            label: 'Annual Revenue ($B)',
            data: [14, 17, 25, 30, 37.3],
            borderColor: '#76ff03',
            backgroundColor: 'rgba(118, 255, 3, 0.2)',
            fill: true,
          },
        ],
      };

      const netIncomeData = {
        labels: ['2019', '2020', '2021', '2022', '2023'],
        datasets: [
          {
            label: 'Net Income ($B)',
            data: [-8, -6, -3, -1, 1.1],
            backgroundColor: '#76ff03',
          },
        ],
      };

      return (
        <div>
          <div className="hero">
            <h1>Uber's Financial Highlights</h1>
          </div>
          <div className="content">
            <h2>Financial Highlights</h2>
            <Line data={revenueData} />
            <Bar data={netIncomeData} />
            <h2>Key Achievements</h2>
            <ul>
              <li>2023: First Operating Profit</li>
              <li>Revenue Growth in Ride-Hailing and Delivery Services</li>
            </ul>
          </div>
        </div>
      );
    }

    export default FinancialOverview;
