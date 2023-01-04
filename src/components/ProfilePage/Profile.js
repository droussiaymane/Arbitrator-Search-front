import React, { useEffect, useState } from "react";
import "./Profile.css";
import DwnldImg from "../../assets/images/button_download.png";
import BackImg from "../../assets/images/button_back.png";
import PreviousImg from "../../assets/images/button_previous_profile.png";
import NextImg from "../../assets/images/button_next_profile.png";
import PrintImg from "../../assets/images/button_print.png";
import NoImg from "../../assets/images/no-image.png";
import PanFeedbck from "../../assets/images/Feedback-on-this-Panelist.png";
import VideoImg from "../../assets/images/VIDEO.png";
import Rating from "../Rating/Rating";
import axios from "axios";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

export default function Profile() {
  const [ratingOpen, setRatingOpen] = useState(false);
  const [userinfo, setUserInfo] = useState([]);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("contact_id");

  const [img, setImg] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const loadProfileData = async () => {
      try {
        const getContact = axios.get(
          `http://localhost:8181/arbitrator/profile/multisearch?contact_id=${id}`
        );
        const getCompensation = axios.get(
          `http://localhost:8181/arbitrator/profile/compensation/search?contact_id=${id}`
        );
        const getPhoto = axios.get(
          `http://localhost:8181/arbitrator/profile/multisearch/image?contact_id=${id}`
        );
        const responses = await axios.all([
          getContact,
          getCompensation,
          getPhoto,
        ]);

        console.log(responses[2].data);
        setUserInfo(responses[0].data);
        console.log(searchParams);
      } catch (err) {
        console.log("failed to fetch because something went wrong!");
      }
    };
    loadProfileData();
  }, []);


  return (
    <div>
      <div
        style={{ backgroundSize: "100%", width: "1030px" }}
        className=" titleBox"
      >
        Arbitrator Search
      </div>

      <div className="content" style={{ width: "1070px" }}>
        <div className="middle-div">
          <div className="btn-div">
            <div className="header-div">
              <img src={'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=100&h=250&dpr=2'} alt="photo" />
              <div className="feebackDiv">
                <img
                  src={PanFeedbck}
                  className="openRatingBtn"
                  onClick={() => {
                    setRatingOpen(true);
                  }}
                />
                {ratingOpen && <Rating setOpenRating={setRatingOpen} />}
              </div>
              <div />
              <div className="videoDiv">
                <img src={VideoImg} />
              </div>
            </div>
            <div>
              <td>
                <a title="" className="af_link" onClick={() => navigate(-1)}>
                  <img src={BackImg} alt="" className="af_link_image" />
                </a>
              </td>
              <td>
                <a title="" className="af_link" onClick={() => navigate(-1)}>
                  <img src={PreviousImg} alt="" className="af_link_image" />
                </a>
              </td>
              <td>
                <a title="" className="af_link" onClick={() => navigate(1)}>
                  <img src={NextImg} alt="" className="af_link_image" />
                </a>
              </td>
              <td>
                <a className="af_link" PrintImg>
                  <img src={PrintImg} alt="" className="af_link_image" />
                </a>
              </td>
              <td>
                <a title="" className="af_link" href="" download>
                  <img src={DwnldImg} alt="" className="af_link_image" />
                </a>
              </td>
              <table style={{ display: "flex", alignContent: "center" }}>
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  {userinfo.map((adr) => (
                    <div style={{ display: "flex" }} key={adr.id}>
                      <td>{adr.image}</td>
                      <td style={{ float: "left", width: "20%" }}>
                        {adr.section_name}
                      </td>
                      <td style={{ float: "left", width: "80%" }}>
                        {adr.section_text}
                      </td>
                    </div>
                  ))}
                </tbody>
              </table>

              <div className="btn-div">
                <td>
                  <a title="" className="af_link" href="#">
                    <img src={BackImg} alt="" className="af_link_image" />
                  </a>
                </td>
                <td>
                  <a title="" className="af_link" href="#">
                    <img src={PreviousImg} alt="" className="af_link_image" />
                  </a>
                </td>

                <td>
                  <a title="" className="af_link" href="#">
                    <img src={NextImg} alt="" className="af_link_image" />
                  </a>
                </td>

                <td>
                  <a title="" className="af_link" href="#">
                    <img src={PrintImg} alt="" className="af_link_image" />
                  </a>
                </td>

                <td>
                  <a title="" className="af_link" href="#">
                    <img src={DwnldImg} alt="" className="af_link_image" />
                  </a>
                </td>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
