import React from "react";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Label
} from "recharts";

const data = [
	{
		name: "Jan",
		uv: 21000,
		pv: 2400,
		amt: 2400
	},
	{
		name: "Feb",
		uv: 15000,
		pv: 1398,
		amt: 2210
	},
	{
		name: "Mar",
		uv: 20000,
		pv: 9800,
		amt: 2290
	},
	{
		name: "Apr",
		uv: 52780,
		pv: 3908,
		amt: 2000
	},
	{
		name: "May",
		uv: 22000,
		pv: 4800,
		amt: 2181
	},
	{
		name: "Jun",
		uv: 90000,
		pv: 3800,
		amt: 2500
	},
	{
		name: "Jul",
		uv: 120490,
		pv: 4300,
		amt: 2100
	},
	{
		name: "Aug",
		uv: 40490,
		pv: 4300,
		amt: 2100
	},
	{
		name: "Sep",
		uv: 11490,
		pv: 4300,
		amt: 2100
	},
	{
		name: "Oct",
		uv: 20490,
		pv: 4300,
		amt: 2100
	},
	{
		name: "Nov",
		uv: 50490,
		pv: 4300,
		amt: 2100
	},
	{
		name: "Dec",
		uv: 149000,
		pv: 4300,
		amt: 2100
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
					<Tooltip />
					<Area
						type="monotone"
						dataKey="uv"
						stroke="url(#colorUv)"
						strokeWidth={4}
						fill="url(#colorUv)"
						fillOpacity={0.5}
					/>
				</AreaChart>
			</ResponsiveContainer>
		);
	}
}
export default AreaGraph;
