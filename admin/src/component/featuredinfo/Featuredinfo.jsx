import React from "react";
import "./featuredinfo.css";
import {ArrowDownward} from '@mui/icons-material';
const Featuredinfo = () => {
  return (
    <div className="featured">
      <div className="featureditem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredmoneycontainer">
          <span className="featuredmoney">$2,415</span>
          <span className="featuredmoneyrate">-11.4<ArrowDownward/></span>
        </div>
        <span className='featuredsub'>Compared to last month</span>
      </div>
      <div className="featureditem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredmoneycontainer">
          <span className="featuredmoney">$2,415</span>
          <span className="featuredmoneyrate">-11.4<ArrowDownward/></span>
        </div>
        <span className='featuredsub'>Compared to last month</span>
      </div>
      <div className="featureditem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredmoneycontainer">
          <span className="featuredmoney">$2,415</span>
          <span className="featuredmoneyrate">-11.4<ArrowDownward/></span>
        </div>
        <span className='featuredsub'>Compared to last month</span>
      </div>
    </div>
  );
};

export default Featuredinfo;
