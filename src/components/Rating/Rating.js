import React, { useEffect, useState } from "react";
import "./Rating.css";
import CancelImg from "../../assets/images/cancel.png";
import SubImg from "../../assets/images/submit-green.png";
import { Button, Form, Input } from "reactstrap";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

function Rating({ setOpenRating }) {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");
  const [searchParams] = useSearchParams();
  // const rate = searchParams.get("rating");
  // const comments = searchParams.get("comment");

  // const onChange = (e) => {
  //   console.log(e.target.value);
  //   setComment(e.target.value);
  // };

  const onSubmit = async (e) => {
    e.preventDefault()
    const post = { rating: "", comment: "" };
    try {
      const res = await axios.post(
        ` http://localhost:8181/arbitrator/submitRating?rating=${rating}&comments=${comment}`,
        post
      );
      setRating(res.data);
      setComment(res.data);
      console.log(res.data);
      setMessage("Thank you for your feedback!");
      alert("Thank you for your feedback!")
    } catch (e) {
      
    }
     
  };

  return (
    <div id="content">
      <Form onSubmit={onSubmit}>
        <span
          style={{ fontWeight: "bold", fontSize: "15px", paddingLeft: "10px" }}
        >
          Rate your experience!
        </span>
        <br />
        <span
          style={{
            fontStyle: "italic",
            fontSize: "14px",
            paddingLeft: "8px",
          }}
        >
          Please give us your feedback on this search platform.
        </span>
        <br />
        <fieldset
          className="rating"
          style={{ marginTop: "20px", background: "white" }}
        >
          <legend>
            <b>Rating:</b>
          </legend>
          <input
            type="radio"
            id="star5"
            name="rating"
            value="5"
            onChange={(event) => {
              setRating(event.target.value);
            }}
          />
          <label for="star5">★</label>

          <input
            type="radio"
            id="star4"
            name="rating2"
            value="4"
            onChange={(event) => {
              setRating(event.target.value);
            }}
          />
          <label for="star4">★</label>
          <input
            type="radio"
            id="star3"
            name="rating"
            value="3"
            onChange={(event) => {
              setRating(event.target.value);
            }}
          />
          <label for="star3">★</label>
          <input
            type="radio"
            id="star2"
            name="rating"
            value="2"
            onChange={(event) => {
              setRating(event.target.value);
            }}
          />
          <label for="star2">★</label>
          <input
            type="radio"
            id="star1"
            name="rating"
            value="1"
            onChange={(event) => {
              setRating(event.target.value);
            }}
          />
          <label for="star1">★</label>
        </fieldset>

        <span>Please add any comments(up to 1000 charcters)</span>

        <br />
        <textarea
          style={{ width: "120%", height: "30%", marginTop: "20%" }}
          className=""
          type="text"
          name="comments"
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}
        ></textarea>

        <div className="titleCloseBtn">
          <img
            style={{ display: "flex", border: "none" }}
            src={CancelImg}
            name="cancel"
            onClick={() => {
              setOpenRating(false);
            }}
          />
          <button
            style={{
              position: "absolute",
              right: "0",
              cursor: "pointer",
              border: "none",
            }}
            type="submit"
          >
            <img src={SubImg} />
          </button>
        </div>
      </Form>
    </div>
  );
}

export default Rating;
