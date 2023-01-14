import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ProfileCard = ({ singleUser }) => {
  const { email, first_name, last_name, avatar } = singleUser;
  return (
    <>
      <div class="flex-container space-between">
        <div
          class=" col card"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div class="img-placeholder">
            <img src={avatar} />
          </div>
          <div>
            <h3>
              {first_name} {last_name}
            </h3>
            <p>
              <i class="fa-solid fa-paper-plane"></i>
              {email}
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
