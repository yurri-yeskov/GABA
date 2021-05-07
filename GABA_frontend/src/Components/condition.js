import React from "react";

import "../Styles/PostButtons.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

class DropdownExampleSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Select Condition",
    };
  }

  handleSelect = (e) => {
    this.props.handleConditionSubmit(e);
    this.setState({ title: e });
  };

  render() {
    return (
      <DropdownButton
        alignRight
        title={this.state.title}
        onSelect={this.handleSelect}
        id="dropdown-menu-align-right"
      >
        <Dropdown.Item eventKey="Old">Old</Dropdown.Item>
        <Dropdown.Item eventKey="Slightly Used">Slightly Used</Dropdown.Item>
        <Dropdown.Item eventKey="New">New</Dropdown.Item>
      </DropdownButton>
    );
  }
}
export default DropdownExampleSelection;
