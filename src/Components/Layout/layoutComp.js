import React from "react";
import Header from "../Layout/header";
import Footer from "../Layout/footer";
import { Helmet } from "react-helmet";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const LayoutComp = ({ children, title, description, keywords, author, style }) => {
    return (
        <div className={style}>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <Header />
                <main style={{ minHeight: "100vh" }}>
                    <ToastContainer />
                    {children}
                </main>
            <Footer />
        </div>
    );
};

LayoutComp.defaultProps = {
    title: 'Omamori Shop',
    description: 'Anime and Kpop shop',
    keywords: 'anime, kpop, figures, plushes',
    author: 'KatzuneStarky'
}

export default LayoutComp;