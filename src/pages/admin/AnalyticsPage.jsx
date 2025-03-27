import React, { useEffect, useState } from 'react';
import '../../css/AnalyticsPage.css';


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

    return (
        <div className="analytics-container">
            <h1 className="analytics-title"> Analytics Dashboard</h1>
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