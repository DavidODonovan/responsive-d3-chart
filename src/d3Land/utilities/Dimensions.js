class Dimensions {
  constructor(dims){
    this.setMargin();
    this.setDims(dims);
    this.setInnerDims();
  };

  setMargin=()=>{
    this.margin = { top: 20, left: 30, bottom: 20, right: 30 };
  };

  setDims=(dims)=>{
    const { width, height } = dims;
    this.width = width;
    this.height = height;
    this.setInnerDims();
  };

  setInnerDims=()=>{
    this.innerHeight = this.height-(this.margin.top+this.margin.bottom);
    this.innerWidth = this.width-(this.margin.left+this.margin.right);
  };

};

export default Dimensions;
