import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import "./arbitrator-search.css";
import Pagination from "../Pagination/Pagination";
import Image from "../../assets/images/rate-experience1.png";
import UpdateSearchimg from "../../assets/images/button_update_search.png";
import axios from "axios";
import Rating from "../Rating/Rating";
import PageNotFound from "../PageNotFound/PageNotFound";
import ReactPaginate from 'react-paginate';


import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import FilterResult from "../Items/FilterResult";
import CurrentPost from "../Items/CurrentPost";
import PaginatedItems from "../Pagination/PaginatedItems";

// import { getResults } from "../../Utils/API";
export default function ArbitratiorSearch() {
  const [ratingOpen, setRatingOpen] = useState(false);
  const [currentPage, setCurreentPage] = useState(1);
  const [visible] = useState(10);
  const [userinfo, setUserInfo] = useState([]);
  const navigate = useNavigate();

  const [filteredResults, setFilteredResults] = useState({
    lname:"",
    lang:""
  });
    const [searchInput, setSearchInput] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("lang"))
  console.log(searchParams.get("lname"))


  useEffect(() => {
    const lang=searchParams.get("lang");
  const lname=searchParams.get("lname");
  let page=searchParams.get("page");

  if(page==null || page=='' ){
    page=0;
  }
if(lang==null && lname==null || lang=='' && lname==''){
  const loadData = async () => {
    try {
      const results = await axios.get(
        'http://localhost:8181/arbitrator/search2?page='+page
      );
      console.log(results.data);

      setUserInfo(results.data);
    } catch (err) {
      console.log("failed to fetch data on arbitrator page!");
    }
  };
  loadData();
}else{
  const loadData = async () => {
    try {
      const results = await axios.get(
        'http://localhost:8181/arbitrator/search/multisearch2?page='+page+'&lang='+lang+'&lname='+lname
      );
      console.log(results.data);

      setUserInfo(results.data);
    } catch (err) {
      console.log("failed to fetch data on arbitrator page!");
    }
  };
  loadData();

}
    
  }, []);




  
  const handleSearch = (e) => {
    navigate("/arbitrator/search?lang="+filteredResults.lang+"&lname="+filteredResults.lname);    

      };


   
  const indexOfLastPost = currentPage * visible;
  const indexOfFirstPost = indexOfLastPost - visible;
  const currentPosts = userinfo.slice(indexOfFirstPost, indexOfLastPost);

  //change page
  // const paginate = (pageNumber) => {
  //   setCurreentPage(pageNumber + 1);
  // };

  return (
    <Form onSubmit={(e)=>handleSearch(e)}>
      <div
        style={{ backgroundSize: "100%", width: "1030px" }}
        className=" titleBox"
      >
        Arbitrator Search
      </div>
      <div className="main-form" style={{ float: "left" }} onSubmit={""}>
        <div>
          <img
            className="openRatingBtn"
            type="button"
            src={Image}
            onClick={() => {
              setRatingOpen(true);
            }}
          />
          {ratingOpen && ( <Rating setOpenRating={setRatingOpen} />)}
        </div>

        <div>
          <table
            className="data-table"
            style={{ float: "right", width: "60%" }}
          >
            <tbody style={{ alignItems: "center" }}>
              <thead>
                <th className="search-results-title">Search results</th>
              </thead>

              
              <PaginatedItems itemsPerPage={4} items={userinfo}/>
            



            </tbody>
            
          </table>
          
          <table className="geoSearch">
            <div className=" top-div2">
              <span className="search-pannel">KEYWORD SEARCH</span>
              <input
                style={{
                  display: "flex",
                  width: "210px",
                  height: "22px",
                  fontSize: "14px",
                }}
                classeName="keyWord"
                type="text"
              />

              <div
                styles={{
                  padding: "5",
                }}
                className="radio-btn"
              >
                <input
                  type="radio"
                  name="fav_language"
                  value="Any"
                  onChange={""}
                />
                <label for="Any">Any</label>
                <input
                  type="radio"
                  name="fav_language"
                  value="all"
                  onChange={""}
                />
                <label for="All">All</label>
                <input
                  type="radio"
                  name="fav_language"
                  value="exact"
                  onChange={""}
                />
                <label for="exact">Exact</label>
              </div>

              <div
                style={{
                  padding: "5px",
                }}
                className="search-pannel"
              >
                AAA PANELS
              </div>
              <input type="checkbox" name="" value=''/>
              <label for="large and complex cases">
                Large and complex cases
              </label>
              <br />
              <input type="checkbox" name="JudgeApple" value="" onChange={""} />
              <label> Judge - Appellate</label>
              <br />
              <input type="checkbox" name="panel" value="Y" onChange={""} />
              <label> Judge - State</label>
              <br />
              <input
                type="checkbox"
                name="JudgeState"
                value="Y"
                onChange={""}
              />
              <label> Judge - Federal</label>
              <br />
              <input
                type="checkbox"
                name=""
                value="judgeFederal"
                onChange={""}
              />
              <label>Judge-Appellate,State or Federal</label>
              <br />
              <input
                type="checkbox"
                name="Accounting"
                value="Y"
                onChange={""}
              />
              <label> Accounting</label>
              <br />
              <input type="checkbox" name="banking" value="Y" onChange={""} />
              <label> Banking & Financial Services</label>
              <br />
              <input type="checkbox" name="construction" onChange={""} />
              <label> Construction</label>
              <br />
              <input
                type="checkbox"
                name="construction-mega-project"
                value="Y"
                onChange={""}
              />
              <label> Construction Mega projcet</label>
              <br />
              <input
                type="checkbox"
                name="employement"
                value=""
                onChange={""}
              />
              <label> Employment</label>
              <br />
              <input type="checkbox" name="energy" value="" onChange={""} />
              <label> Energy</label>
              <br />
              <input type="checkbox" name="franchise" value="" onChange={""} />
              <label> Franchise</label>
              <br />
              <input type="checkbox" name="healthcare" value="" onChange={""} />
              <label> Healthcare</label>
              <br />
              <input type="checkbox" name="insurance" value="" onChange={""} />
              <label> Insurance</label>
              <br />
              <input
                type="checkbox"
                name="intellectual-property"
                value=""
                onChange={""}
              />
              <label> Intellectual Property</label>
              <br />
              <input
                type="checkbox"
                name="real-estate"
                value="Y"
                onChange={""}
              />
              <label> Real Estate</label>
              <br />
              <input type="checkbox" name="Technology" value="" onChange={""} />
              <label> Technology</label>
              <br />
              <input
                type="checkbox"
                name="telecomunication"
                value={searchInput}
                onChange={searchInput}
              />
              <label> Telecommunications/Wireless/Cable/Satellite</label>
              <br />
              <input
                type="checkbox"
                name="transportation"
                value={searchInput}
                onChange={searchInput}
              />
              <label>Transportation</label>
              <br />
              <br />

              <div className="second-div">
                <span
                  className="search-pannel"
                  style={{ display: "flex", marginTop: "10px" }}
                >
                  LAST NAME
                </span>
                <input
                  style={{
                    width: "200px",
                    height: "18px",
                    fontSize: "12px",
                    display: "flex",
                  }}
                  type="text"
                  name="lname"
                  defaultValue={filteredResults.lname}
                  onChange={(e)=>  {
                    const updatedValue={lname:e.target.value}
                    setFilteredResults(filteredResult => ({
                    ...filteredResult,
                    ...updatedValue
                  }));}}
                
                />

                <div className="langDiv">
                  <td>Languages:</td>
                  <div>
                    <select
                      style={{
                        display: "flex",
                        width: "210px",
                        height: "18px",
                        fontSize: "12px",
                      }}
                      name="lang"
                      onChange={(e)=>{
                        const updatedValue={lang:e.target.value}
                        setFilteredResults(filteredResult => ({
                        ...filteredResult,
                        ...updatedValue
                      }));
                      }}
                    >
                      <option name="not specified">Not Specified</option>
                      <option name="lang" value='english'>English</option>
                      <option name="lang" value='spanish'>Spanish</option>
                      <option name="lang" value='french'>French</option>
                      <option name="lang" value='dutch'>Dutch</option>
                      <option name="lang" value='chinese'>Chinese</option>
                      <option name="lang" value='afrikaans'>Afrikaans</option>
                    </select>
                  </div>
                </div>

                <div className="search-pannel">GEOGRAPHIC SEARCH</div>

                <div>
                  <td>State:</td>
                  <select
                    style={{
                      display: "flex",
                      width: "210px",
                      height: "18px",
                      fontSize: "12px",
                    }}
                    name=""
                    onChange={handleSearch}
                  >
                    <option name="not specified">Not Specified</option>
                    <option name="GA" onChange={handleSearch}>
                      Georgia
                    </option>
                    <option name="NY" onChange={handleSearch}>
                      New York
                    </option>
                    <option name="FL" onChange={handleSearch}>
                      Florida
                    </option>
                    <option name="TX" onChange={handleSearch}>
                      Texas
                    </option>
                  </select>
                </div>

                <td>City:</td>
                <input
                  style={{ display: "flex", width: "200px", height: "18px" }}
                  type="text"
                  value=""
                />
                <td>Zip Code:</td>
                <input
                  style={{
                    display: "flex",
                    width: "200px",
                    height: "18px",
                    fontSize: "12px",
                  }}
                  type="text"
                />
                <select
                  style={{
                    display: "flex",
                    width: "75px",
                    height: "18px",
                    fontSize: "12px",
                  }}
                  name=""
                  not
                  required
                >
                  <option value="option 1">25 miles</option>
                </select>
              </div>
              <br />
              <button id="searchBtn" className="updateSearchBtn" type="submit" >
                <img src={UpdateSearchimg} />
              </button>
            </div>
          </table>
        </div>
        <br />
      </div>
    </Form>
  );
}
