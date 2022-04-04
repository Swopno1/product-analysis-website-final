import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  LabelList,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useReviews from "../../hooks/useReviews";

const Dashboard = () => {
  const [reviews, setReviews] = useReviews([]);

  const data = reviews.map((review) => {
    const result = { name: review.user, value: review.rating };
    return result;
  });
  // console.log(data);

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl text-cyan-900 font-semibold text-center p-6">
        Dashboard
      </h2>
      <div className="">
        <h3 className="text-xl text-cyan-900 font-semibold text-center p-6">
          Bar-chart showing user ratings
        </h3>
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#82ca9d">
            <LabelList dataKey="name" position="top" />
          </Bar>
        </BarChart>
      </div>
      <h3 className="text-xl text-cyan-900 font-semibold text-center p-6">
        Line-chart showing user ratings
      </h3>
      <LineChart width={730} height={250} data={data}>
        <XAxis />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value">
          <LabelList dataKey="name" position="top" />
        </Line>
      </LineChart>
    </div>
  );
};

export default Dashboard;
