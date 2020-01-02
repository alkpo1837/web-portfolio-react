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
    <div class="home-layout">
      <div class="text">
        <h1 className="my-name">
          Arthur <br /> Capo
        </h1>
      </div>
      <div className="all-activies">
        <h2 className="title">Créateur de :</h2>
        <div class="activites-item">
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
