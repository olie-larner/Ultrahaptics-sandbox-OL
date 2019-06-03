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
    const pageHero = document.querySelector(".page-hero").clientHeight;
    const darken = pageHero < currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
      darken
    });
  };

  render() {
    return (
      <div
        className={classnames(
          "nav-bar hidden sm:flex",
          {
            "nav-bar--hidden": !this.state.visible
          },
          { "nav-bar--darken": this.state.darken }
        )}
      >
        <div className="nav-bar__cont">
          <div className="nav-bar__logo">
            <img
              src="https://mrb-code-handover-area.s3.eu-west-2.amazonaws.com/Sandbox/uh-white-logo.png"
              width="100%"
              alt="UH"
            />
          </div>
          <ul>
            <li>Technology</li>
            <li>Use Cases</li>
            <li>Company</li>
            <li>Create</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
