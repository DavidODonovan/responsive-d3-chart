import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition';

class Circles {
  constructor(chart, data, scales){
    this.chart = chart;
    this.data = data;
    this.scales = scales;
    this.updateData(this.data);
  };

  updateData=(data)=>{
    this.data = data;
    this.allNodes =
      this.chart.selectAll('.nodeGroup').data(this.data, d=>d.id);

    this.allNodes.select('circle')
      .transition().duration(1000)
      .attr('fill', 'orange')
      .attr('r', (d)=>d.ego)

    this.allNodes
      .transition().duration(1000)
      .attr('transform', (d)=>`translate(${this.scales.xScale(d.x)}, ${this.scales.yScale(d.y)})`)

    this.enter();
  };

  enter=()=>{
    this.eachNode = this.allNodes.enter()
      .append('g')
        .attr('class', 'nodeGroup')
        .attr('transform', (d)=>`translate(${this.scales.xScale(d.x)}, ${this.scales.yScale(d.y)})`)

    this.eachNode.append('circle')
      .attr('opacity', '0.7')
      .attr('fill', 'green')
      .attr('stroke', 'black')
      .attr('r', (d)=>0)
      .transition().duration(1000)
      .attr('r', (d)=>d.ego)

    this.eachNode
      .append('text')
        .text((d)=>d.id)
        .attr('fill', 'black')
        .attr('dx', -9)
        .attr('dy', 4)

    this.exit();
  };

  exit=()=>{
    this.allNodes.exit().select('circle')
      .transition().duration(1000)
      .attr('fill', 'red')
      .attr('r', 0)
    this.allNodes.exit().select('text')
      .attr('opacity', 0)

    this.allNodes.exit()
      .transition().duration(1000)
      .remove();
  };

  updateScales=(scales)=>{
    this.scales = scales;
    this.allNodes =
      this.chart.selectAll('.nodeGroup')

    this.allNodes
      .transition().duration(500)
      .attr('transform', (d)=>`translate(${this.scales.xScale(d.x)}, ${this.scales.yScale(d.y)})`)
  };

};

export default Circles;
