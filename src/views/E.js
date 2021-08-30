import React from "react";
import * as d3 from "d3";
//import data from './data_dendrogram_full.json'

// import data from './food_court.csv';
// import data from './data.csv'

//  import root from './flare.json'

// import dataset from './miserables.json'

class E extends React.Component {



  componentDidMount() {
    // console.log(dataset)
    var w = window.screen.width;
    var h = 600;
    var dataset = {
      nodes: [
        { name: "Adam" },
        { name: "Bob" },
        { name: "Carrie" },
        { name: "Donovan" },
        { name: "Edward" },
        { name: "Felicity" },
        { name: "George" },
        { name: "Hannah" },
        { name: "Iris" },
        { name: "Jerry" }
      ],
      edges: [
        { source: 0, target: 1 },
        { source: 0, target: 2 },
        { source: 0, target: 3 },
        { source: 0, target: 4 },
        { source: 1, target: 5 },
        { source: 2, target: 5 },
        { source: 2, target: 5 },
        { source: 3, target: 4 },
        { source: 5, target: 8 },
        { source: 5, target: 9 },
        { source: 6, target: 7 },
        { source: 7, target: 8 },
        { source: 8, target: 9 }
      ]
    };


    var force = d3.forceSimulation(dataset.nodes)
      .force("charge", d3.forceManyBody())
      .force("link", d3.forceLink(dataset.edges))


      .force("center", d3.forceCenter().x(w / 2).y(h / 2));
    console.log(force);


    var colors = d3.scaleOrdinal(d3.schemeCategory10);

    //Create SVG element
    var svg = d3.select(".c")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

    //Create edges as lines
    var edges = svg.selectAll("line")
      .data(dataset.edges)
      .enter()
      .append("line")
      .style("stroke", "#ccc")
      .style("stroke-width", 1)

      .text(function (d) {
        return JSON.stringify(d.source.name);
      });
    //Create nodes as circles
    var nodes = svg.selectAll("circle")
      .data(dataset.nodes)
      .enter()
      .append("circle")
      .attr("r", 6)
      .text(function (d) {
        return d.name;
      })
      .style("fill", function (d, i) {
        return colors(i);
      })

    //Add a simple tooltip
    nodes.append("title")
      .text(function (d) {
        return d.name;
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
export default E