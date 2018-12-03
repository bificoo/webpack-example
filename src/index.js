import React from "react";
import ReactDOM from "react-dom";
import Button from "devextreme-react/button";

import "devextreme/dist/css/dx.light";
import "./style";

class Application extends React.Component {

    state = {
        name: "Peggy Shih",
        disabled: false,
    };

    handleClick = () => {
        this.setState({
            name: "Super woman",
            disabled: true,
        });
    };

    render() {
        return <article>
            <header>Webpack4 Example</header>
            <section>
                <p>{ `I am ${ this.state.name }.` }</p>
                <Button text={ "Click me!" } disabled={ this.state.disabled } onClick={ this.handleClick } />
            </section>
            <footer>copyright@bificoo</footer>
        </article>;
    }
}


ReactDOM.render(
    <Application />,
    document.getElementById("wrapper")
);