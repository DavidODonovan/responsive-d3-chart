import { scaleLinear } from 'd3-scale';
import { min, max, extent } from 'd3-array';

class Scales {
  constructor(data, dims){
    this.setScales(data, dims);
  };

  setScales=(data, dims)=>{
    this.xScale =
      scaleLinear()
        .domain([0, 100])
        .range([0, dims.innerWidth])

    this.yScale =
      scaleLinear()
        .domain([0, 50])
        .range([dims.innerHeight, 0])
  };

};

export default Scales;
