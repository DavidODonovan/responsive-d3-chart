import { select } from 'd3-selection';
import { Dimensions, Scales, Axes } from './utilities';
import Circles from './Circles';

class D3Nexus {
   constructor(domNodeCurrent){
    this.svg = select(domNodeCurrent).append('svg');
    this.svg.attr('width', '100%').attr('height', '100%');
  };

  init=(data, dims)=>{
    this.data = data;
    this.dims = new Dimensions(dims);
    this.scales = new Scales(this.data, this.dims);
    this.chart = this.svg.append('g');
    this.chart.attr('transform', `translate(${this.dims.margin.left}, ${this.dims.margin.top})`);
    this.axes = new Axes(this.chart, this.scales, this.dims);
    this.circles = new Circles(this.chart, this.data, this.scales);
  };

  updateDims=(newDims)=>{
    this.dims.setDims(newDims);
    this.scales.setScales(this.data, this.dims);
    this.axes.updateAxes(this.scales, this.dims)
    this.circles.updateScales(this.scales);
  };

  updateData=(data)=>{
    this.data = data;
    this.circles.updateData(this.data);
  };

};

export default D3Nexus;
