import "./StatsChart.css";
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from "react";
import axios from "../../../../../axios";
import { Chart as ChartJS } from "chart.js/auto";

export const StatsChart = ({ active }) => {
    const [TeamsData, setTeamsData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("https://yoursportzbackend.azurewebsites.net/api/team/all/");
                setTeamsData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    const each = [
        { id: 0, value: 6, position: "Goalkeeper" },
        { id: 1, value: 4, position: "Right Back" },
        { id: 2, value: 3, position: "Center Back" },
        { id: 4, value: 1, position: "Left Back" },
        { id: 5, value: 0, position: "Right Midfielder" },
        { id: 6, value: 6, position: "Center Midfielder" },
        { id: 9, value: 7, position: "Left Midfielder" },
        { id: 10, value: 8, position: "Right Winger" },
        { id: 11, value: 9, position: "Center Forward" },
        { id: 12, value: 2, position: "Left Winger" },
        { id: 13, value: 4, position: "Center Player" }
    ];

    useEffect(() => {
        const positions = TeamsData.slice(28, 29).map(data => data.players.map(eachPlayer => eachPlayer.position))[0];

        const fun = () => {
            const flatPositions = positions?.flat() || []; // Check if positions is defined
            each.forEach(indi => {
                const count = flatPositions.filter(pos => pos === indi.position).length;
                indi.value = count;
            });
        };
        fun();
    }, [TeamsData, each]);

    const data = {
        labels: TeamsData.slice(28, 29).map(data => data.players.map(eachPlayer => eachPlayer.name))[0], // Use positions from 'each'
        datasets: [
            {
                label: 'Player Stats',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: each.map(indi => indi.value),
            },
        ],
    };

    return (
        <div className="statsChart">
            {
                active === 1 && (
                    <>
                        <h4>Player Chart (Dummy)</h4>
                        <Bar className="chart" data={data} />
                    </>
                )
            }
            {
                active === 2 && (
                    <>
                        <h4>Score Chart (Dummy)</h4>
                        <Bar className="chart" data={data} />
                    </>
                )
            }
            {
                active === 3 && (
                    <>
                        <h4>Team Chart (Dummy)</h4>
                        <Bar className="chart" data={data} />
                    </>
                )
            }

        </div>
    );
};
