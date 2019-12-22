import React from "react";
import "./Home.scss";

import Layout from "components/Layout";
import Product from "components/Home/Product";
import Description from "components/Home/Description";

import web from "img/home/web.svg";
import smartphone from "img/home/smartphone.svg";
import game from "img/home/game.svg";

const Home = () => (
  <Layout>
    <h2>
      Je suis <strong>Arthur</strong>. Je développe :
    </h2>
    <div className="all-activies">
      <Product icon={web} type={"Des sites webs"} animationDelay={"0.5s"} />
      <Product
        icon={smartphone}
        type={"Des applications mobiles"}
        animationDelay={"0s"}
      />
      <Product icon={game} type={"Des jeux vidéo"} animationDelay={"1s"} />
    </div>
    <Description animationDelay={"1.75s"} />
  </Layout>
);

export default Home;
