import React from "react";
import BusinessAndHistory from "components/BusinessAndHistory";
import MainImage from "components/MainImage";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MainImage page={this.props.match.path} />
        <BusinessAndHistory />
      </React.Fragment>
    );
  }
}

export default App;
