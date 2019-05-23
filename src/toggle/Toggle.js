import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { toggleMessage } from "../toggle/actions";

const Toggle = ({ messageVisibility, toggleMessage }) => (
  <div>
    {messageVisibility && <p>abc def geh</p>}
    <button onClick={toggleMessage}>Toggle me</button>
  </div>
);

const mapStateToProps = state => ({
  messageVisibility: state.toggle.messageVisibility
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ toggleMessage }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toggle);
