import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import "./index.css";
import Sdata from './Sdata';


ReactDOM.render(
  <>
  <h1 className="heading_style">List of top 5 Netflix Series in 2022</h1>
  {Sdata.map((val)=>{
    return(
    <Card 
      imgsrc={val.imgsrc}
      link = {val.link}
      title = {val.title}
      sname= {val.sname}
    />
  );
  })};
  </>,
  document.getElementById("root")
);

