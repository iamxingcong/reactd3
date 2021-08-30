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
    var h = 2600;


    const simulation = d3.forceSimulation(dataset.nodes)
      .force("link", d3.forceLink(dataset.links).id(d => d.id).distance(490))
      .force("charge", d3.forceManyBody().strength(-490))
      .force("center", d3.forceCenter(w / 2, h / 2))

      .force("x", d3.forceX())
      .force("y", d3.forceY());


    //Create SVG element
    var svg = d3.select(".c")
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .style("font", "12px sans-serif")


    svg.append("defs").selectAll("marker")
      .data(dataset.links)
      .join("marker")
      .attr("id", d => `arrow-${d.source.id}`)
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 15)
      .attr("refY", -0.5)
      .attr("markerWidth", 26)
      .attr("markerHeight", 26)
      .attr("orient", "auto")
      .append("path")
      .attr("fill", "red")
      .attr("d", "M0,-5L10,0L0,5");


    //Create edges as lines
    var link = svg.append("g")
      .attr("fill", "none")
      .attr("stroke-width", 1.5)
      .selectAll("path")


      .data(dataset.links)
      .enter()
      .append("line")
      .style("stroke", "#ccc")
      .style("stroke-width", 1)
      .attr("marker-end", d => `url(${(`#arrow-${d.source.id}`)})`);
    

    //Create nodes as circles
    var node = svg.append("g")
      .attr("fill", "currentColor")
      .attr("stroke-linecap", "round")
      .attr("stroke-linejoin", "round")
      .selectAll("g")
      .data(dataset.nodes)
      .join("g")


    node.append("circle")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .attr("r", 6);

    node.append("text")
      .attr("x", 8)
      .attr("y", "0.31em")
      .text(d => d.id)
      .clone(true).lower()
      .attr("fill", "none")
      .attr("stroke", "#fff")
      .attr("stroke-width", 3);


    simulation.on("tick", () => {
      link.attr("x1", function (d) { return d.source.x; })
        .attr("y1", function (d) { return d.source.y; })
        .attr("x2", function (d) { return d.target.x; })
        .attr("y2", function (d) { return d.target.y; });

      node.attr("transform", d => `translate(${d.x},${d.y})`);
    });


    //Every time the simulation "ticks", this will be called




  }


  render() {
    return (
      <div className="c" >

      </div>
    )
  }
}
export default F