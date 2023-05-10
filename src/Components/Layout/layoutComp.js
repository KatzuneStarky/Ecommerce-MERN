import React from "react";
import Header from "../Layout/header";
import Footer from "../Layout/footer";
import { Helmet } from "react-helmet";

const LayoutComp = ({ children, title, description, keywords, author }) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <Header />
                <main style={{ minHeight: "80vh" }}>{children}</main>
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