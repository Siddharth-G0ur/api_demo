import { Fragment } from "react";
import { connect } from "react-redux";
import { getUser } from "./actions/user";
import PropTypes from "prop-types";

function App({ getUser }) {
  return (
    <Fragment>
      <button onClick={getUser}> Click Me</button>
    </Fragment>
  );
}

App.propTypes = {
  getUser: PropTypes.func.isRequired,
};

export default connect(null, { getUser })(App);
