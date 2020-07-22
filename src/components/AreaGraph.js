import React from "react";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";
import {CustomToolTip} from './';

const data = [
	{
		name: "Jan",
		uv: 21000,
	},
	{
		name: "Feb",
		uv: 15000,
	},
	{
		name: "Mar",
		uv: 20000,
	},
	{
		name: "Apr",
		uv: 52780,
	},
	{
		name: "May",
		uv: 22000,
	},
	{
		name: "Jun",
		uv: 90000,
	},
	{
		name: "Jul",
		uv: 120490,
	},
	{
		name: "Aug",
		uv: 40490,
	},
	{
		name: "Sep",
		uv: 11490,
	},
	{
		name: "Oct",
		uv: 20490,
	},
	{
		name: "Nov",
		uv: 50490,
	},
	{
		name: "Dec",
		uv: 149000,
	}
];

class AreaGraph extends React.Component {
	render() {
		return (
			<ResponsiveContainer width="100%" height={300} debounce={1}>
                
				<AreaChart
					data={data}
					margin={{
						top: 0,
						right: 10,
						left: 0,
						bottom: 0
					}}
				>
					<defs>
						<linearGradient
							id="colorUv"
							x1="0%"
							y1="0%"
							x2="100%"
							y2="0%"
						>
							<stop offset="30%" stopColor="#fb9b48" />
							<stop offset="70%" stopColor="#a862ff" />
						</linearGradient>
					</defs>
                    
                    <CartesianGrid vertical={false}/>
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip content={CustomToolTip} />
					<Area
						type="monotone"
						dataKey="uv"
						stroke="url(#colorUv)"
						strokeWidth={4}
						fill="url(#colorUv)"
						fillOpacity={0.1}
					/>
				</AreaChart>
			</ResponsiveContainer>
		);
	}
}
export default AreaGraph;
