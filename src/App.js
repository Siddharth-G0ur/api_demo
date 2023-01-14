import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getUser } from "./actions/user";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./components/Cards";
import "./App.css";
import ProfileCard from "./components/ProfileCard";

function App({ user, getUser }) {
  useEffect(async () => {
    await getUser();
  }, []);

  return (
    <div>
      <ProfileCard />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          margin: "100px",
        }}
      >
        {user !== null &&
          user.length > 0 &&
          user.map((elm, elmIndex) => {
            return (
              <Cards
                key={elmIndex}
                first_name={elm.first_name}
                last_name={elm.last_name}
                id={elm.id}
              />
            );
          })}
      </div>
    </div>
  );
}

App.propTypes = {
  getUser: PropTypes.func.isRequired,
  user: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getUser })(App);
