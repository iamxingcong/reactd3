/** MultilineChart.js */
import React from "react";
import * as d3 from "d3";
class MultilineChart extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [],
                
            };
        }
        componentDidMount() {
            var ts = []
            for (var i = 0; i < 10; i++) {
                ts.push(Math.floor(Math.random() * 7) + 2);
            }
            this.setState({
                data: ts
            });
            console.log(this.state.data)
            console.log(ts)
            var svg = d3.select('.svg');
            // 設定畫布尺寸 & 邊距
            var margin = 40,
                width = 960 - margin * 2,
                height = 500 - margin * 2;
            svg.attr({
                "width": width + margin,
                "height": height + margin * 2,
                "transform": "translate(" + margin + "," + margin + ")"
            });
            // x 軸比例尺
            var xScale = d3.scaleLinear().domain([0, ts.length]).range([0, width]);
            // y 軸比例尺 給繪製矩形用
            var yScale = d3.scaleLinear().domain([0, 10]).range([0, height]);
            // y 軸比例尺 2 繪製座標軸用
            var yScale2 = d3.scaleLinear().domain([0, 10]).range([height, 0]);
            // x 軸
            var xAxis = d3.axisBottom().scale(xScale);
            // y 軸
            var yAxis = d3.axisLeft().scale(yScale2);
            // 繪製矩形
            svg.selectAll('.bar').data(ts).enter().append('g').classed('bar', true).append('rect').attr('x', (d, i) => xScale(i) + margin).attr('y', (d, i) => height - yScale(d) + margin).attr('height', (d, i) => yScale(d)).attr('width', '5%').attr('fill', '#999');
            // 繪製 x 軸
            svg.append("g").attr("class", "x axis").attr("transform", `translate(${margin}, ${height + margin})`).call(xAxis);
            // 繪製 y 軸
            svg.append("g").attr("class", "y axis").attr("transform", `translate(${margin}, ${margin})`).call(yAxis);
            // 處理位移
            svg.select('.x.axis').selectAll('.tick text').attr("dx", width * 0.05);
            svg.select('.x.axis').selectAll('.tick line').attr('transform', 'translate(' + width * 0.05 + ', 0)');
            svg.selectAll('.bar').attr('transform', 'translate(' + width * 0.02 + ', 0)');
        }
        render() {
            return (
                 <div className = "content" > 
                    <svg className = "svg"> </svg> 
                 </div>
             )
            }
        }
        export default MultilineChart;