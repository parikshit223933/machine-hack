import React from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Legend } from "recharts";
import {PieLegend} from './';

const data = [
	{
		name: "Group A",
		value: 400,
		color: "#f63759",
		secondaryColor: "#fbafbd"
	},
	{
		name: "Group B",
		value: 800,
		color: "#dce9f2",
		secondaryColor: "#f1f6fa"
	},
	{
		name: "Group C",
		value: 300,
		color: "#feb9c5",
		secondaryColor: "#ffe3e8"
	},
	{
		name: "Group D",
		value: 300,
		color: "#ff6581",
		secondaryColor: "#ffc1cd"
	}
];
class RightStats extends React.Component {
	render() {
		return (
			<div className="right-stats mt-5 ml-lg-5 mr-lg-5 pl-lg-3 pr-lg-3 pt-3 pb-5">
				<div>
					<p
                        style={{ fontSize: "25px", color: "#fc7a90" }}
                        className="pl-md-3 pl-lg-0"
					>
						General Statistics
					</p>
				</div>
				<div className="w-100 pie-chart-container">
					<ResponsiveContainer width="100%" height="100%">
						<PieChart>
							<Pie
								data={data}
								dataKey="value"
								nameKey="name"
								cx="50%"
								cy="50%"
								innerRadius={30}
								outerRadius={80}
								fill="#82ca9d"
								paddingAngle={4}
							>
								{data.map((entry, index) => {
									return (
										<Cell
											key={`cell-${index}`}
											fill={data[index].secondaryColor}
										/>
									);
								})}
							</Pie>
							<Pie
								data={data}
								dataKey="value"
								nameKey="name"
								cx="50%"
								cy="50%"
								innerRadius={50}
								outerRadius={90}
								fill="#dce9f2"
								paddingAngle={4}
							>
								{data.map((entry, index) => {
									return (
										<Cell
											key={`cell-${index}`}
											fill={data[index].color}
										/>
									);
								})}
							</Pie>
                            <Legend content={<PieLegend/>}/>
						</PieChart>
					</ResponsiveContainer>
				</div>
			</div>
		);
	}
}
export default RightStats;
