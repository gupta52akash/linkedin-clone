import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feeds from "../../components/Feeds/Feeds";
import Widgets from "../../components/Widgets/Widgets";

function Home() {
  return (
    <main className="home">
      {/* TODO: [LC-2]Main */}
      {/*	   TODO: [LC-8]Sidebar */}
      {/*	   TODO: [LC-9] feed */}
      {/*	   TODO: [LC-10]Widgets */}
      <Sidebar></Sidebar>
      <Feeds></Feeds>
      <Widgets></Widgets>
    </main>
  );
}

export default Home;
