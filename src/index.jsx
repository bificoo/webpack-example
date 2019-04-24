import React from 'react';
import ReactDOM from "react-dom";
import Header from "modules/Header";
import Main from "modules/Main";
import Footer from "modules/Footer";
import "devextreme/dist/css/dx.light";
import "./style";

const Application = () => {
    return (
        <article>
            <Header />
            <Main />
            <Footer />
        </article>
    );
};

ReactDOM.render(
    <Application />,
    document.getElementById("wrapper")
);