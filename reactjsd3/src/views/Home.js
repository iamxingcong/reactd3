import MultilineChart from './MultilineChart.js'

import React from "react";
 
import schc from "../SCHC.json";
import vcit from "../VCIT.json";
import portfolio from "../portfolio.json";



const portfolioData = {
  name: "Portfolio",
  color: "#ffffff",
  items: portfolio.map((d) => ({ ...d, date: new Date(d.date) }))
};
const schcData = {
  name: "SCHC",
  color: "#d53e4f",
  items: schc.map((d) => ({ ...d, date: new Date(d.date) }))
};
const vcitData = {
  name: "VCIT",
  color: "#5e4fa2",
  items: vcit.map((d) => ({ ...d, date: new Date(d.date) }))
};

const dimensions = {
  width: 600,
  height: 300,
  margin: {
    top: 30,
    right: 30,
    bottom: 30,
    left: 60
  }
};

function Home(){
	return(
		<div id="home"> 
		

 <MultilineChart
        data={[portfolioData, schcData, vcitData]}
        dimensions={dimensions}
      />

		</div>
	)
}

export default Home