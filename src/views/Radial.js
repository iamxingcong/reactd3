
/** Radial.js */
import React from "react";
import * as d3 from "d3";
//import data from './data_dendrogram_full.json'
 
// import data from './food_court.csv';
import data from './flare.csv'
class Radial extends React.Component {
     
  

    componentDidMount() {
      
      // d3.csv(data).then(function(data) {
      //   console.log(data)
      // }).catch(function(err) {
      //     throw err;
      // })   

        var width = window.screen.width
        var height = 1200
        var svg = d3
        .select(".c")
        .append("svg")
        .attr("width", width)
        .attr("height", height)

       
        var   g = svg.append("g").attr("transform", "translate(" + (width / 2 - 15) + "," + (height / 2 + 25) + ")");

          var stratify = d3.stratify()
          .parentId(function(d) { return d.id.substring(0, d.id.lastIndexOf(".")); });

          var tree = d3.cluster()
          .size([360, 390])
          .separation(function(a, b) { return (a.parent === b.parent ? 1 : 2) / a.depth; });

          d3.csv(data).then(function(data) {

            
          var root = tree(stratify(data)
            .sort(function(a, b) { return (a.height - b.height) || a.id.localeCompare(b.id); }));

          var link = g.selectAll(".link")
          .data(root.descendants().slice(1))
          .enter().append("path")
            .attr("class", "link")
            .attr("d", function(d) {
              return "M" + project(d.x, d.y)
                  + "C" + project(d.x, (d.y + d.parent.y) / 2)
                  + " " + project(d.parent.x, (d.y + d.parent.y) / 2)
                  + " " + project(d.parent.x, d.parent.y);
            });

          console.log(link)
          
          var node = g.selectAll(".node")
          .data(root.descendants())
          .enter().append("g")
            .attr("class", function(d) { return "node" + (d.children ? " node--internal" : " node--leaf"); })
            .attr("transform", function(d) { return "translate(" + project(d.x, d.y) + ")"; });

          node.append("circle")
            .attr("r", 2.5);

          node.append("text")
            .attr("dy", ".21em")
            .attr("x", function(d) { return d.x < 180 === !d.children ? 6 : -6; })
            .style("text-anchor", function(d) { return d.x < 180 === !d.children ? "start" : "end"; })
            .attr("transform", function(d) { return "rotate(" + (d.x < 180 ? d.x - 90 : d.x + 90) + ")"; })
            .text(function(d) { return d.id.substring(d.id.lastIndexOf(".") + 1); });
          });

          function project(x, y) {
          var angle = (x - 90) / 180 * Math.PI, radius = y;
          return [radius * Math.cos(angle), radius * Math.sin(angle)];
          }

  }
    
    render() {
        return (
              <div className="c" > 
              
              </div>
          )
    }
}
export default Radial