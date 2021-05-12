import axios from "commons/axios";
import React from "react";
import List from "components/List";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_SC5LteHAAjQgwfXNomwA9");
class SetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  fineshOrderList = (id, username) => {
    let templateParams = {
      list_id: id,
      username: username,
    };
    
    emailjs
      .send("service_keegrso", "template_8h061cv", templateParams)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      }); 
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(`/orderlist?takeway=自取`);
      this.setState({ list: response.data });
      console.log(this.state.list);
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {this.state.list.map((item) => {
            return (
              <div className="col-4 col-xs-12" key={item.id}>
                <List
                  list={item}
                  fineshOrderList={(id, username) =>
                    this.fineshOrderList(id, username)
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SetList;
