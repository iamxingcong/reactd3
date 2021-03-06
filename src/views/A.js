
/** Radial.js */
import React from "react";
import * as d3 from "d3";
//import data from './data_dendrogram_full.json'
 
// import data from './food_court.csv';
import data from './flare.csv'
class A extends React.Component {
     
  

    componentDidMount() {
      
      // d3.csv(data).then(function(data) {
      //   console.log(data)
      // }).catch(function(err) {
      //     throw err;
      // })   

              //JSON object with the data

              console.log(data)
              var width = 960
              var height = 3200
              var svg = d3
              .select(".c")
              .append("svg")
              .attr("width", width)
              .attr("height", height)
      
            
            // var svg = d3.select("svg"),
            // width = +svg.attr("width"),
            // height = +svg.attr("height"),
        var   g = svg.append("g").attr("transform", "translate(40,0)");

            var tree = d3.cluster()
            .size([height, width - 160]);

            var stratify = d3.stratify()
            .parentId(function(d) { return d.id.substring(0, d.id.lastIndexOf(".")); });

         d3.csv(data).then(function(data) {
            var root = stratify(data)
              .sort(function(a, b) { return (a.height - b.height) || a.id.localeCompare(b.id); });

            tree(root);

            var link = g.selectAll(".link")
              .data(root.descendants().slice(1))
            .enter().append("path")
              .attr("class", "link")
              .attr("d", function(d) {
                return "M" + d.y + "," + d.x
                    + "C" + (d.parent.y + 100) + "," + d.x
                    + " " + (d.parent.y + 100) + "," + d.parent.x
                    + " " + d.parent.y + "," + d.parent.x;
              });

              console.log(link)

            var node = g.selectAll(".node")
              .data(root.descendants())
            .enter().append("g")
              .attr("class", function(d) { return "node" + (d.children ? " node--internal" : " node--leaf"); })
              .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })

            node.append("circle")
              .attr("r", 2.5);

            node.append("text")
              .attr("dy", 3)
              .attr("x", function(d) { return d.children ? -8 : 8; })
              .style("text-anchor", function(d) { return d.children ? "end" : "start"; })
              .text(function(d) { return d.id.substring(d.id.lastIndexOf(".") + 1); });
            
              }

        )}
    
    render() {
        return (
              <div className="c" > 
               
              </div>
          )
    }
}
export default A