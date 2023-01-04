import React from 'react'
import {
    Link,
    useLocation,
    useNavigate,
    useSearchParams,
  } from "react-router-dom";
const FilterResult = ({adr}) => {
  return (
    <tr key={adr.id}>
    <Link
      to={`/arbitrator/profile/multisearch?contact_id=${adr.contact_id}`}
    >
      <div
        style={{
          display: "flex",
          padding: "10px 0",
          borderBottom: "dotted 1px #7a7878",
          width: "120%",
          color: "#373636",
        }}
      >
        <div className="main-result">
          <div className="adr-titles">
            {adr.last_name}, {adr.profession_suffix_code}
            {adr.first_name}, {adr.middle_name}
          </div>
          <div className="adr-items">
            <td>
              {adr.city}, {adr.state_code}
            </td>
            <td>| {adr.language_name}</td>
            <td>| {adr.hearing_rate}</td>
          </div>
        </div>
      </div>
    </Link>
  </tr>
  )
}

export default FilterResult