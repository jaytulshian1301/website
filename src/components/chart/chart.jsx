import React from 'react'
import { Line } from 'react-chartjs-2'

const Chart = ({ datapoints }) => {

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            // label: '# of Votes',
            data: datapoints,
            borderColor: 'rgb(0,0,255)',
            radius: 0,
            fill: false,
            borderWidth: 1
        }],
        plugins: {
            legend: false
        }
        
    }

    return (
            <Line
                options={{ maintainAspectRatio: false }} data={data} />
    )
}

export default Chart
