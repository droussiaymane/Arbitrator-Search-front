import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import "./main-template.css";
import Image from "../../assets/images/rate-experience1.png";
import SearchImg from "../../assets/images/button_search.png";
import handleSearch from "../ArbitratorSearch/ArbitratorSearch";
import Rating from "../Rating/Rating";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function MainTemplate(props) {
  const [ratingOpen, setRatingOpen] = useState(false);
  const [userinfo, setUserInfo] = useState([]);
  const [searchParams] = useSearchParams();
  const [currentPage, setCurreentPage] = useState(1);
  const [visible, setVisible] = useState(10);
  const [input, setInput] = useState("");

  const [lang, setLang] = useState("");
  const [lname, setLname] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
   /* const loadData = async () => {
      try {
        const results = await axios.get(
          `http://localhost:8181/arbitrator/search/multisearch?`
        );
        console.log(results.data);

        setUserInfo(results.data);
      } catch (err) {
        console.log("failed to fetch data on arbitrator page!");
      }
    };
    loadData();

    console.log("you clicked me!!!");
*/
    navigate("/arbitrator/search?lang="+lang+"&lname="+lname);
  };

  const indexOfLastPost = currentPage * visible;
  const indexOfFirstPost = indexOfLastPost - visible;
  const currentPosts = userinfo.slice(indexOfFirstPost, indexOfLastPost);

  const handleSearch = (event) => {
    // Destructuring
    //setInput(event.target.value);
    setLname(event.target.value)
    console.log(event.target.value);
  };

  // API.userInfo(userinfo).then((response) => {});

  return (
    <Form className="main-form" onSubmit={handleSubmit}>
      <div className=" top-div">
        <span className="adr-title">Arbitrator Search</span>

        <img
          src={Image}
          alt=""
          className="openRatingBtn"
          onClick={() => {
            setRatingOpen(true);
          }}
        />
        {ratingOpen && <Rating setOpenRating={setRatingOpen} />}

        <div>
          <span
            style={{
              fontSize: "24px",
              padding: "30px",
            }}
          >
            For AAA cases
          </span>

          <div
            style={{
              fontSize: "15px",
              textAlign: "left",
              padding: "30px",
            }}
          >
            You have been invited to use the AAA Arbitrator Search Platform,
            which is designed to assist the parties in their selection of an
            arbitrator or arbitrators. The platform is only to be used for
            arbitrations that are currently being administered by the AAA that
            are in the arbitrator selection phase. It is expressly not to be
            used in cases not yet filed with the AAA, or on cases that are not
            administered by the AAA. There is no fee for the use of the platform
            apart from the administrative fees that have been paid to the AAA.
            Your access code will expire on December 3 2022, but you will be
            able to renew it with your AAA contact if needed.
          </div>
          <br />
          <div>
            <a
              href="http://www.adr.org/sites/default/files/document_repository/Find%20the%20Right%20Arbitrator.pdf"
              target="_blank"
              className="goLink"
            >
              Read more...
            </a>
          </div>
        </div>
      </div>

      <div>
        <table>
          <div className="search-input">
            <td>
              <span className="search-pannel">KEYWORD SEARCH</span>
              <input
                style={{
                  width: "210px",
                  height: "22px",
                  fontSize: "14px",
                }}
                classeName="keyWord"
                type="text"
                name="message"
              />
            </td>
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
                onChange={handleSearch}
              />
              <label for="Any">Any</label>
              <input
                type="radio"
                name="fav_language"
                value="all"
                onChange={handleSearch}
              />
              <label for="All">All</label>
              <input
                type="radio"
                name="fav_language"
                value="exact"
                onChange={handleSearch}
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
            <input
              type="checkbox"
              name="panel"
              value="large"
              onChange={handleSearch}
            />
            <label for="large and complex cases">
              {" "}
              Large and complex cases
            </label>
            <br />
            <input
              type="checkbox"
              id="judge"
              name="JudgeAppellate"
              value="Y"
              onChange={handleSearch}
            />
            <label> Judge - Appellate</label>
            <br />
            <input
              type="checkbox"
              name="JudgeState"
              value="Y"
              onChange={handleSearch}
            />
            <label> Judge - State</label>
            <br />
            <input
              type="checkbox"
              name="judge-federal"
              value="Y"
              onChange={handleSearch}
            />
            <label> Judge - Federal</label>
            <br />
            <input
              type="checkbox"
              name=""
              value="judge-appellate"
              onChange={handleSearch}
            />
            <label>Judge-Appellate,State or Federal</label>
            <br />
            <input
              type="checkbox"
              name="panel"
              value="accounting"
              onChange={handleSearch}
            />
            <label> Accounting</label>
            <br />
            <input
              type="checkbox"
              name="panel"
              value="banking"
              onChange={handleSearch}
            />
            <label> Banking & Financial Services</label>
            <br />
            <input
              type="checkbox"
              name="panel"
              value="construction"
              onChange={handleSearch}
            />
            <label> Construction</label>
            <br />
            <input
              type="checkbox"
              name="panel"
              value="construction-mega-project"
              onChange={handleSearch}
            />
            <label> Construction Mega projcet</label>
            <br />
            <input
              type="checkbox"
              name="panel"
              value="employement"
              onChange={handleSearch}
            />
            <label> Employment</label>
            <br />
            <input
              type="checkbox"
              name="panel"
              value="energy"
              onChange={handleSearch}
            />
            <label> Energy</label>
            <br />
            <input
              type="checkbox"
              name="panel"
              value="franchise"
              onChange={handleSearch}
            />
            <label> Franchise</label>
            <br />
            <input
              type="checkbox"
              name="panel"
              value="healthcare"
              onChange={handleSearch}
            />
            <label> Healthcare</label>
            <br />
            <input
              type="checkbox"
              name="panel"
              value="insurance"
              onChange={handleSearch}
            />
            <label> Insurance</label>
            <br />
            <input
              type="checkbox"
              name="panel"
              value="intellectual-property"
              onChange={handleSearch}
            />
            <label> Intellectual Property</label>
            <br />
            <input
              type="checkbox"
              name="panel"
              value="real-estate"
              onChange={handleSearch}
            />
            <label> Real Estate</label>
            <br />
            <input
              type="checkbox"
              name="panel"
              value="technology"
              onChange={handleSearch}
            />
            <label> Technology</label>
            <br />
            <input
              type="checkbox"
              name="panel"
              value="telecomunication"
              onChange={handleSearch}
            />
            <label> Telecommunications/Wireless/Cable/Satellite</label>
            <br />
            <input
              type="checkbox"
              name="panel"
              value="transportation"
              onChange={handleSearch}
            />
            <label>Transportation</label>
            <br />
            <br />

            <div>
              <td>
                <span
                  className="search-pannel"
                  style={{
                    marginTop: "10px",
                  }}
                >
                  LAST NAME
                </span>
                <td>
                  <input
                    style={{
                      width: "200px",
                      height: "18px",
                      fontSize: "12px",
                    }}
                    type="text"
                    onChange={handleSearch}
                  />
                </td>
              </td>
            </div>
          </div>

          <div className="langDiv">
            <td>
              <span>Languages:</span>
              <select onChange={(e)=>setLang(e.target.value)}
                style={{
                  width: "210px",
                  height: "18px",
                  fontSize: "12px",
                }}
                name="selectList"
                id="selectList"
              >
                <option value="" >
                  Not Specified
                </option>
                <option value="English" >
                  English
                </option>
                <option value="Spanish" >
                  Spanish
                </option>
                <option value="French">French</option>
                <option value="Dutch">Dutch</option>
                <option value="Chinese">Chinese</option>
                <option value="Afrikaans">Afrikaans</option>
              </select>
            </td>
          </div>

          <div className="geoSearch">
            <span className="search-pannel">GEOGRAPHIC SEARCH</span>
            <br />

            <td>
              <span>State:</span>
              <select
                style={{
                  width: "210px",
                  height: "18px",
                  fontSize: "12px",
                }}
                name="selectList"
                onChange={handleSearch}
              >
                <option value="option 1" onChange={handleSearch}>
                  Not Specified
                </option>
              </select>

              <td>City:</td>
              <input
                style={{
                  width: "200px",
                  height: "18px",
                }}
                type="text"
                onChange={handleSearch}
              />
              <td>Zip Code:</td>
              <input
                style={{
                  width: "200px",
                  height: "18px",
                  fontSize: "12px",
                }}
                type="text"
                onChange={handleSearch}
              />
              <select
                style={{
                  width: "75px",
                  height: "18px",
                  fontSize: "12px",
                }}
                name="selectList"
                id="selectList"
              >
                <option value="option 1">25 miles</option>
              </select>
            </td>
          </div>
        </table>
      </div>
      <button className="searchButton" type="submit">
        <img src={SearchImg} />
      </button>
      <br />
      <br />
    </Form>
  );
}
