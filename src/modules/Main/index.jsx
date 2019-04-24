import React from 'react';
import Button from "devextreme-react/button";
import "./style";

class Main extends React.Component {

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
        return (
            <section>
                <p>{ `I am ${ this.state.name }.` }</p>
                <Button text={ "Click me!" } disabled={ this.state.disabled } onClick={ this.handleClick } />
            </section>
        );
    }
};

export default Main;