import { Fragment } from "react";
import { connect } from "react-redux";
import { getUser } from "./actions/user";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./components/Cards";
import "./App.css";
import ProfileCard from "./components/ProfileCard";

function App({ getUser }) {
  return (
    <div>
      <button onClick={getUser}> Click Me</button>
      <ProfileCard />
      <Cards />
    </div>
  );
}

App.propTypes = {
  getUser: PropTypes.func.isRequired,
};

export default connect(null, { getUser })(App);
