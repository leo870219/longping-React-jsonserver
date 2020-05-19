import React from "react";

class BusinessAndHistory extends React.Component {
  constructor() {
    super();
    this.state = {
      tableName: "business",
    };
  }
  handleClick = (table, event) => {
    event.preventDefault();
    this.setState({ tableName: table });
  };
  render() {
    return (
      <React.Fragment>
        <section id="homeIntroduction">
          <div className="container-fluid" id="menu">
            <div className="row w3-card">
              <div className="col">
                <a href="/" onClick={this.handleClick.bind(this, "business")}>
                  <div className="tablink">
                    <h5>經營理念</h5>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="/" onClick={this.handleClick.bind(this, "history")}>
                  <div className="tablink">
                    <h5>歷史起源</h5>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {this.state.tableName === "business" ? (
            <div id="business" className="container-fluid menu w3-card">
              <div className="container">
                <div className="row">
                  <article className="col-md-6">
                    <h6>
                      遵循古法、口味道地、食材保證新鮮
                      <br />
                      －讓您 吃的更安心
                      <br />
                      服務用心
                      <br />
                      －您的滿意，就是我們追求的信念
                    </h6>
                  </article>
                  <div className="col-md-6">
                    <img className="img-fluid" alt="經營理念" src={'images/business.jpeg'} />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div id="history" className="container-fluid menu w3-card">
              <div className="container ">
                <div className="row justify-content-center">
                  <div calss="col-sm-12 col-lg-6">
                    <img className="img-fluid" alt="歷史起源" src={'images/history.jpg'} />
                  </div>
                  <article className="col-sm-12 col-lg-6">
                    <h6>
                      創始店名為"龍品魚丸店"，創立於民國八十三年，在台中已好幾家分店的龍品魚丸店，而且在網路上相當高名氣與好評，不少部落客和網友都直稱這家是台中便當界美食，且經常店門口都會排上一場串人龍，就能知道民眾的受歡迎程度。龍品快餐店則是加盟店，但與創始店龍品魚丸店有所不同，快餐店雖為加盟店，但經營方式以及食材的烹煮都是老闆與老闆娘自行烹調，僅與魚丸店拿取蝦漿的食材原料，因此取龍品之名。
                    </h6>
                  </article>
                </div>
              </div>
            </div>
          )}
        </section>

        <section id="homeLocationInformation">
          <div className="container text-align">
            <div className="row justify-content-center iframe-rwd">
              <h5>我們的位置</h5>
              <iframe
                title="map"
                src="https://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q=台中市北區北平路二段68之1號&z=16&output=embed&t="
              ></iframe>
              <h6>營業時間:週一至週六AM11:00-PM8:00</h6>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default BusinessAndHistory;
