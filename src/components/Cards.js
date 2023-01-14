import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { getSingleUser } from "../actions/singleUser";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Cards = ({ first_name, last_name, id, getSingleUser }) => {
  const onClick = () => {
    const res = getSingleUser(id);
  };
  return (
    <Button variant="primary" onClick={onClick}>
      {first_name} {last_name}
    </Button>
  );
};
Cards.propTypes = {
  getSingleUser: PropTypes.func.isRequired,
};
export default connect(null, { getSingleUser })(Cards);
