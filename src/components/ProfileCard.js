import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Noimagefound from "./No-image-found.jpg";

const ProfileCard = ({ singleUser }) => {
  const { email, first_name, last_name, avatar } = singleUser;
  let Avatar = Noimagefound;
  let Name = "No Name Found";
  let Email = "No Email Found";
  if (avatar !== undefined) {
    Avatar = avatar;
    Name = first_name + " " + last_name;
    Email = email;
  }

  return (
    <>
      <div class="flex-container space-between">
        <div
          class=" col card"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div class="img-placeholder">
            <img src={Avatar} />
          </div>
          <div>
            <h3>{Name}</h3>
            <p>
              <i class="fa-solid fa-paper-plane"></i>
              {Email}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
ProfileCard.propTypes = {
  singleUser: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  singleUser: state.singleUser,
});
export default connect(mapStateToProps)(ProfileCard);
