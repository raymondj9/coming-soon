import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../reusables/Footer/Footer";
import Navbar from "../reusables/Navbar/Navbar";
import bg from "../../assets/m-bg.jpg";

const MainLayout = ({ children }) => {
  return (
    <Layout className="overflow-hidden">
      <div className="min-h-screen flex flex-col justify-between main bg-black/80">
        <div className="h-full">
          <Navbar />
          <div className="content h-[80vh] flex items-center">
            <div>{children}</div>
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

const Layout = styled.div`
  background-image: url(${bg});
  * {
    color: #fff;
  }
`;

export default MainLayout;
