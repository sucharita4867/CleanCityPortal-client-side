import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import HomeIssues from "./Homeissues";
import CommunityStats from "./CommunityStats";
import JoinPage from "./JoinPage";

const HomePage = () => {
  return (
    <div className="">
      <Banner />
      <Category />
      <HomeIssues />
      <CommunityStats />
      <JoinPage/>
    </div>
  );
};

export default HomePage;
