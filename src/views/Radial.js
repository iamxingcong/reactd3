
/** Radial.js */
import React from "react";
import * as d3 from "d3";
//import data from './data_dendrogram_full.json'
 
import data from './food_court.csv';

class Radial extends React.Component {
     
  

    componentDidMount() {
      
      d3.csv(data).then(function(data) {
        console.log(data)
      }).catch(function(err) {
          throw err;
      })
   


        
   
    }
    render() {
        return (
              <div className="c" > 
                <svg width = "400" height = "400"></svg>
              </div>
          )
    }
}
export default Radial