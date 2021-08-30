import React from "react";
import * as d3 from "d3";
//import data from './data_dendrogram_full.json'

// import data from './food_court.csv';
// import data from './data.csv'

//  import root from './flare.json'

import dataset from './miserables.json'

class F extends React.Component {



  componentDidMount() {
     console.log(dataset)
    var w = window.screen.width;
    var h = 600;
   

    var force = d3.forceSimulation(dataset.nodes)
    .force("link", d3.forceLink(dataset.links)
    .id(d => d.id).distance(190))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(w / 2, h / 2))
   

    console.log(force);


    
    //Create SVG element
    var svg = d3.select(".c")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

    //Create edges as lines
    var edges = svg.selectAll("line")
      .data(dataset.links)
      .enter()
      .append("line")
      .style("stroke", "#ccc")
      .style("stroke-width", 1)
      edges.append("text")
      .text(function (d) {
        return JSON.stringify(d.source.id);
      });
    //Create nodes as circles
    var nodes = svg.selectAll("circle")
      .data(dataset.nodes)
      .enter()
      .append("circle")
      .attr("r", 6)

    nodes.append("text")
      .text(function (d) {
        return d.id;
      });




    //Every time the simulation "ticks", this will be called
    force.on("tick", function () {

      edges.attr("x1", function (d) { return d.source.x; })
        .attr("y1", function (d) { return d.source.y; })
        .attr("x2", function (d) { return d.target.x; })
        .attr("y2", function (d) { return d.target.y; });

      nodes.attr("cx", function (d) { return d.x; })
        .attr("cy", function (d) { return d.y; });

    });





  }


  render() {
    return (
      <div className="c" >

      </div>
    )
  }
}
export default F