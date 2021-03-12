import Header from "./components/HeaderBlock";
import Layout from "./components/LayoutBlock";
import Footer from "./components/FooterBlock";
import React from "react";
import Img from "./components/LayoutBlock/images/bg1.jpg";

const App =() =>{
    return(
        <>
            <Header />
            <Layout title="First layout" urlBg={Img}/>
            <Layout title="Second layout" colorBg="#e2e2e2" />
            <Layout title="Third layout" urlBg={Img}/>
            <Footer />
        </>);
}

export default App;
