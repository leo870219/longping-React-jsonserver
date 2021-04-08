import React from "react";
import UserProfile from "components/UserProfile";
import Panel from "components/Panel";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  toProfile = () => {
    Panel.open({
      component: UserProfile,
      props: {
        user: this.props.user,
      },
      callback: (data) => {
        if (data === "logout") {
          this.props.history.go(0);
        }
      },
    });
  };
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img
                src={"images/logoRed.png"}
                width="60"
                height="40"
                className="d-inline-block align-top"
                alt="龍品快餐店"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    關於龍品
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/product">
                    產品介紹
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/booking">
                    線上訂餐
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav mr-0 mt-2 mt-lg-0">
                {this.props.user.nickname ? (
                  <li className="nav-item">
                    <span
                      className="nickname nav-link text-dark"
                      onClick={this.toProfile}
                    >
                      <FontAwesomeIcon icon={faUser} />
                      {this.props.user.nickname}
                    </span>
                  </li>
                ) : (
                  <React.Fragment>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">
                        會員登入
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/register">
                        會員註冊
                      </Link>
                    </li>
                  </React.Fragment>
                )}
                <a
                  className="nav-link"
                  href="https://www.facebook.com/%E9%BE%8D%E5%93%81%E5%BF%AB%E9%A4%90%E5%BA%97-300982883289665/?ref=br_rs"
                >
                  <i className="fab fa-facebook-square"></i>Facebook
                </a>
              </ul>
            </div>
          </div>
        </nav>
        <hr />
      </header>
    );
  }
}

export default withRouter(Header);
