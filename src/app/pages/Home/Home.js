import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import Feeds from "../../components/Feeds/Feeds";
import Widgets from "../../components/Widgets/Widgets";

function Home() {
  return (
    <main className="home">
      {/* TODO: [LC-2]Main */}
      {/*	   TODO: [LC-8]Sidebar */}
      {/*	   TODO: [LC-9] feed */}
      {/*	   TODO: [LC-10]Widgets */}
      <SideBar></SideBar>
      <Feeds></Feeds>
      <Widgets></Widgets>
    </main>
  );
}

export default Home;
