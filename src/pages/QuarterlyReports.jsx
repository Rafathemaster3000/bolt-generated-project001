import React from 'react';

    function QuarterlyReports() {
      return (
        <div>
          <div className="hero">
            <h1>Quarterly Financial Reports</h1>
          </div>
          <div className="content">
            <h2>2024</h2>
            <div>
              <h3>Q1</h3>
              <p>Revenue: $10B, Net Income: $0.5B, Gross Bookings: $20B</p>
              <p>Performance: Strong growth in all sectors.</p>
            </div>
            <h2>2023</h2>
            <div>
              <h3>Q4</h3>
              <p>Revenue: $9B, Net Income: $0.3B, Gross Bookings: $18B</p>
              <p>Performance: Continued growth in ride-hailing.</p>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Quarter</th>
                  <th>Revenue</th>
                  <th>Net Income</th>
                  <th>Gross Bookings</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Q1 2024</td>
                  <td>$10B</td>
                  <td>$0.5B</td>
                  <td>$20B</td>
                </tr>
                <tr>
                  <td>Q4 2023</td>
                  <td>$9B</td>
                  <td>$0.3B</td>
                  <td>$18B</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    export default QuarterlyReports;
