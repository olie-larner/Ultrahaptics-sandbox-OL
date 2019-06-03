import React from "react";
import classnames from "classnames";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {
    return (
      <div
        className={classnames("nav-bar", {
          "nav-bar--hidden": !this.state.visible
        })}
      >
        <div className="nav-bar__logo">LOGO</div>
        <ul>
          <li>Technology</li>
          <li>Use Cases</li>
          <li>Company</li>
          <li>Create</li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
