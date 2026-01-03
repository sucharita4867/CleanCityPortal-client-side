import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import HomeIssues from "./Homeissues";
import CommunityStats from "./CommunityStats";
import JoinPage from "./JoinPage";
import HowItWorks from "./HowItWorks";

const HomePage = () => {
  return (
    <div className="">
      <Banner />
      <Category />
      <HomeIssues />
      <HowItWorks />
      <CommunityStats />
      <JoinPage />
    </div>
  );
};

export default HomePage;
