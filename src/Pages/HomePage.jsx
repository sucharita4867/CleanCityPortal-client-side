import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import HomeIssues from "./Homeissues";
import CommunityStats from "./CommunityStats";
import JoinPage from "./JoinPage";
import HowItWorks from "./HowItWorks";
import WhyCleanHub from "./newHomeSection/WhyCleanHub";
import CommunityVoices from "./newHomeSection/CommunityVoices";

const HomePage = () => {
  return (
    <div className="">
      <Banner />
      <Category />
      <HomeIssues />
      <HowItWorks />
      <WhyCleanHub />
      <CommunityVoices />
      <CommunityStats />
      <JoinPage />
    </div>
  );
};

export default HomePage;
