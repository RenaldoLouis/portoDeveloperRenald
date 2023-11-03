import React from "react";
import Navbar from "../../components/atom/navbar";
import Content from "./Content";
import Footer from "../../components/molecules/Footer";

const Home = () => {
    return (
        <div style={{ background: "black" }}>
            <Navbar />
            <Content />
            <Footer />
        </div>
    )
}

export default Home;