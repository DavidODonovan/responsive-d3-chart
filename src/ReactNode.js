import React, { useRef, useState, useEffect } from 'react';
import { withContext } from 'react-dims';
import ThePattern from './d3Land/ThePattern';

const ReactNode = ({dims, data, mapping})=>{
  const domNode = useRef(null);
  const [canvas, createCanvas] = useState(null);
  const [vizInitialized, setVizInitialized]= useState(false);

  useEffect(()=>{
    createCanvas(()=>new ThePattern(domNode.current))
  },[]);

  useEffect(()=>{
    if(data.length>1 && dims.width && vizInitialized===false){
      canvas.init(data, dims);
      setVizInitialized(()=>true);
    };
  },[data, dims]);

  useEffect(()=>{
    vizInitialized && canvas.updateDims(dims);
  },[dims]);

  useEffect(()=>{
    vizInitialized && canvas.updateData(data);
  }, [data]);

  return (
    <div ref={domNode} style={{height: '100%'}}/>
  )
};

export default withContext(ReactNode);
