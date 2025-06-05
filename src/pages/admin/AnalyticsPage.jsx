import React, { useEffect, useState } from 'react';
import '../../css/AnalyticsPage.css';
import { Line } from 'react-chartjs-2';


const AnalyticsPage = () => {
    const [data, setData] = useState({
        totalSales: 0,
        newUsers: 0,
        ordersCompleted: 0,
        websiteTraffic: 0,
    });

    useEffect(() => {
        // Simulate fetching data from an API
        const fetchData = async () => {
            // Replace this with actual API call
            const response = {
                totalSales: 0,
                newUsers: 0,
                ordersCompleted: 0,
                websiteTraffic: 0,
            };
            setData(response);
        };

        fetchData();
    }, []);
    
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Website Traffic',
                data: [],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
        ],
    });
    return (
        <div className="analytics-container">
            <h1 className="analytics-title"> Analytics </h1>
            <div className="analytics-cards">
                <div className="card">
                    <h2>Total Sales</h2>
                    <p>Ksh.{data.totalSales}</p>
                </div>
                <div className="card">
                    <h2>New Users</h2>
                    <p>{data.newUsers}</p>
                </div>
                <div className="card">
                    <h2>Orders Completed</h2>
                    <p>{data.ordersCompleted}</p>
                </div>
                <div className="card">
                    <h2>Website Traffic</h2>
                    <p>{data.websiteTraffic} visits</p>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsPage;