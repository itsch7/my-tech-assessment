import React from "react";
import Birthday from "./Images/Birthday.png";
import "./style.scss";
import { FaHandshake } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';

import date from "./icons/date.png";
import icon from "./icons/icon.png";

const LandingPage = () => {
  return (
    <div className="Landing">
      <div className="imageL">
        <img src={Birthday} alt="" />
      </div>
      <div className="info">
        <div className="eventInfo">
            <div className="create">
          <div className="eventName">Movie Night</div>
          <div className="Host"> <span style={{color:"gray"}}> Hosted by </span> Elyssa</div>
          </div>
          <div className="createBtn"> <button>  Create my event </button> </div> 
        </div>
        <div className="guests">
          <div className="responses">
            {" "}
            <span style={{ fontWeight: "bold" }}>14</span> Responses.{" "}
            <span style={{ color: "#501FC1", fontWeight: "500", cursor: "pointer" }}>
              see guests
            </span>
          </div>
          <div className="invite">
            {" "}
            <button>
              {" "}
              <FaHandshake className="icon" /> invite
            </button>
          </div>
        </div>
        <div className="desContainer">
          <div className="description">
            <div className="icon">
              <img
                style={{ height: "45px", width: "45px" }}
                src={date}
                alt=""
              />
            </div>
            <div className="desc">
              <div className="date">
                <div className="startDate" style={{ fontWeight: "700" }}>
                  {" "}
                  16 August: 6:00PM
                </div>
                <div className="endDate">
                  to{" "}
                  <span style={{ fontWeight: "500" }}> 19 August: 1:00PM </span>{" "}
                  UTC +10{" "}
                </div>
              </div>
              <div className="icon">
                {" "}
                <BiChevronRight className="icon1" />{" "}
              </div>
            </div>
          </div>
          <div className="description">
            <div className="icon">
              <img
                style={{ height: "45px", width: "45px" }}
                src={date}
                alt=""
              />
            </div>
            <div className="desc">
              <div className="date">
                <div className="startDate" style={{ fontWeight: "700" }}>
                  {" "}
                  16 August: 6:00PM
                </div>
                <div className="endDate">
                  to{" "}
                  <span style={{ fontWeight: "500" }}> 19 August: 1:00PM </span>{" "}
                  UTC +10{" "}
                </div>
              </div>
              <div className="icon">
                {" "}
                <BiChevronRight className="icon1" />{" "}
              </div>
            </div>
          </div>
          <div className="description">
            <div className="icon">
              <img
                style={{ height: "45px", width: "45px" }}
                src={date}
                alt=""
              />
            </div>
            <div className="desc">
              <div className="date">
                <div className="startDate" style={{ fontWeight: "700" }}>
                  {" "}
                  16 August: 6:00PM
                </div>
                <div className="endDate">
                  to{" "}
                  <span style={{ fontWeight: "500" }}> 19 August: 1:00PM </span>{" "}
                  UTC +10{" "}
                </div>
              </div>
              <div className="icon">
                {" "}
                <BiChevronRight className="icon1" />{" "}
              </div>
            </div>
          </div>
          <div className="buttons">
            <button className="btn"> Description</button>
            <button className="btn"> Comments</button>

            </div>       
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
