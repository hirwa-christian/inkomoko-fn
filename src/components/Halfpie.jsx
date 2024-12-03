import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';

const RADIAN = Math.PI / 180;
const data = [
  { name: 'A', value: 150, color: '#FF698D'},
  { name: 'B', value: 45, color: '#E8E8E8'},
];
const cx = 100;
const cy = 40;
const iR = 80;
const oR = 100;
const value =150;

const needle = (value, data, cx, cy, iR, oR, color) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="#none" fill={color} />,
  ];
};

export default class Example extends PureComponent {
  render() {
    return (
      <PieChart width={400} height={200}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={iR}
          outerRadius={oR}
          fill="#FF698D"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}

    <Label
      value={`$0k`}
      position={"insideStart"}
      angle={0}
      fill="#333"
      fontSize={20}
    />
    <Label
      value="$12k"
      position="center"
      angle={0}
      fill="#333"
      fontSize={30}
    />
    <Label
      value={`$20k`}
      position="insideEnd"
      angle={0}
      offset={10}
      fill="#333"
      fontSize={20}
    />
        </Pie>
        {needle(value, data, cx, cy, iR, oR, '#FF698D')}
      </PieChart>
    );
  }
}
