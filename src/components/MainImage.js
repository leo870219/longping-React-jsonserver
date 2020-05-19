import React from "react";

const MainImage = props => {
  return props.page === "/" ? (
    <section id="homeBigPicture">
      <div className="w3-display-container">
        <img src={'images/about.jpg'} className="img-fluid" alt="龍品快餐店" />
        <div className="w3-display-middle ">
          <h1>關於龍品</h1>
          <h4>二十多年用心經營，台中人首選的好味道</h4>
        </div>
      </div>
    </section>
  ) : (
    <section id="productBigPicture">
      <div className="w3-display-container ">
        <img
          src={'images/product.jpg'}
          className="img-fluid"
          alt="龍品快餐店"
          width="100%"
        />
        <div className="w3-display-middle">
          <h1>產品介紹</h1>
          <h4>傳統滷肉搭配各種主餐，讓您回味無窮</h4>
        </div>
      </div>
    </section>
  );
};

export default MainImage;
