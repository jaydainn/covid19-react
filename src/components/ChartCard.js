import React from "react"
import Chart from "chart.js"


class ChartCard extends React.Component {


    chartRef = React.createRef();

    componentDidMount() {
        this.buildChart();
    }

    componentDidUpdate() {
        this.buildChart();
    }

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");
        const data = this.props.data
        new Chart(myChartRef, {
            type: "pie",
            data: {
                //Bring in data
                labels: ["Recovered", "Deaths"],
                datasets: [
                    {

                        data: data,
                        backgroundColor: [
                            'rgb(0, 104, 55)',
                            'rgb(255, 29, 37)'
                        ],
                        borderColor: [
                            'rgb(0, 104, 55)',
                            'rgb(255, 29, 37)'
                        ],
                        borderWidth: 1

                    }]

            },
            options: {

            }
        });
    }

    render() {
        return (
            <div >
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}







export default ChartCard


