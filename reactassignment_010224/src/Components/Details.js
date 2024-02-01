import React from 'react';
import axios from 'axios';

function Details() {
    const [APIdata,setAPIData]= React.useState({});
    React.useEffect(()=>{
      (async ()=>{
        let dta=await axios.get("https://randomuser.me/api");
        setAPIData(dta.data.results[0]);
        //console.log(APIdata);
    })()
  },[]
    );
    React.useEffect(()=>{console.log(APIdata)},[APIdata]);
    //console.log(APIdata);
    const refresh=()=>{
      (async ()=>{
        let d=await axios.get("https://randomuser.me/api");
        setAPIData(d.data.results[0]);
    })()
    }
    return <div>{APIdata.name  && <div className='mainDiv'>
        <img id="displayPic" src={APIdata.picture.large} alt="display picture"/>
        <div>
            <b>Name : </b><span>{APIdata.name.title}.{APIdata.name.first} {APIdata.name.last}</span><br />
            <div className="row">
              <div className="col-lg-4 col-md-4"><b>Gender : </b><span>{APIdata.gender}</span><br /></div>
            <div className="col-lg-4 col-md-4"><b>Age : </b><span>{APIdata.dob.age}</span><br /></div>
            <div className="col-lg-4 col-md-4"><b>Phone : </b><span>{APIdata.phone}</span><br /></div>
            </div>
            
            <b>Email : </b><span>{APIdata.email}</span><br />
            <div className="row">
              <div className="col-lg-6 col-md-6"><b>City : </b><span>{APIdata.location.city}</span><br /></div>
            <div className="col-lg-6 col-md-6"><b>Country : </b><span>{APIdata.location.country}</span><br /></div>
            
            </div>
            <button id="refreshBtn" className="btn btn-info" onClick={refresh}>Refresh</button>
        </div>
      </div>}</div>
    ;
  }


export default Details