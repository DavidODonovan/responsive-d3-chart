import { axisBottom, axisLeft } from 'd3-axis';

class Axes {
  constructor(parent, scales, dims){
    this.createAxes(parent, scales, dims);
  };

  createAxes=(parent, scales, dims)=>{
    this.scaleAxes(scales, dims);

    this.xAxisBottomG =
      parent.append('g')
        .attr('transform', `translate(0, ${dims.innerHeight})`)
        .call(this.xAxisBottom)

    this.yAxisLeftG =
      parent.append('g')
        .call(this.yAxisLeft)
  };

  scaleAxes=(scales, dims)=>{
    this.xAxisBottom =
      axisBottom()
        .scale(scales.xScale)
        .tickSize(-dims.innerHeight)

    this.yAxisLeft =
      axisLeft()
        .scale(scales.yScale)
        .tickSize(-dims.innerWidth)
  };

  updateAxes=(scales, dims)=>{
    this.scaleAxes(scales, dims);
    this.xAxisBottomG
      .attr('transform', `translate(0, ${dims.innerHeight})`)
      .call(this.xAxisBottom)
    this.yAxisLeftG
      .call(this.yAxisLeft)
  };

};

export default Axes;
