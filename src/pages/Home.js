import React from "react";
import "./Home.scss";

import Layout from "components/Layout";
import Product from "components/Home/Product";

import web from "img/home/web.svg";
import smartphone from "img/home/smartphone.svg";
import game from "img/home/game.svg";

const Home = () => (
  <Layout>
    <div className="home-layout">
      <div className="text">
        <h1 className="my-name">
          ARTHUR <br /> CAPO
        </h1>
      </div>
      <div className="separation"></div>
      <div className="all-activies">
        <h2 className="title">Développeur freelance</h2>
        <div className="activites-item">
          <Product icon={web} type={"Sites web"} animationDelay={"0.5s"} />
          <Product
            icon={smartphone}
            type={"Applications mobiles"}
            animationDelay={"0s"}
          />
          <Product icon={game} type={"Jeux vidéo"} animationDelay={"1s"} />
        </div>
      </div>
    </div>
    {/* <Description animationDelay={"1.75s"} /> */}
  </Layout>
);

export default Home;
