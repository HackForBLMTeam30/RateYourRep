import React from "react";

const LegislatorProfile = (props) => {
  const { activeLegislator } = props;
  return (
    <div id="legislator-profile">
      <h3>Party Affiliation</h3>
      <h5>{activeLegislator.party}</h5>
      <br></br>
      <h3>Address</h3>
      <h5>{activeLegislator.address}</h5>
      <br></br>
      <h3>Contact Info</h3>
      {activeLegislator.phones.map((phone, idx) => {
        return <h5 key={idx}>{phone}</h5>;
      })}
      {activeLegislator.urls.map((phone, idx) => {
        return <h5 key={idx}>{phone}</h5>;
      })}
      <br></br>
      <h3>Social Media</h3>
      {activeLegislator.channels.map((channel, idx) => {
        return (
          <h5 key={idx}>
            {channel.type} Profile: {channel.id}
          </h5>
        );
      })}
    </div>
  );
};

export default LegislatorProfile;
