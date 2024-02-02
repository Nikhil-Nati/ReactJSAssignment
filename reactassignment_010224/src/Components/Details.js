import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useLocalStorage } from './useLocalStorage';

function Details() {
    const [APIdata,setAPIData]= useState({});
    const [setItem,getItem]=useLocalStorage("data");
    
    useEffect(()=>{
      const data=getItem();
      if (data){
        setAPIData(data);
      }
      else{
        fetchData();
      }
     },[]
    );
    const fetchData= async()=>{
      let d=await axios.get("https://randomuser.me/api");
      setAPIData(d.data.results[0]);
      setItem(d.data.results[0]);
    }
    return <div>{APIdata.name  && <div className='mainDiv'>
        <img id="displayPic" src={APIdata.picture.large} alt="display picture"/>
        <div className="infoDiv">
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
          </div>
            <button id="refreshBtn" className="btn btn-info" onClick={fetchData}>Refresh</button>
        
      </div>}</div>
    ;
  }


export default Details