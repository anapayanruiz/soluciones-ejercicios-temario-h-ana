import React from 'react';
import '../stylesheets/HalfPage.css';



class HalfPage extends React.Component {
    render() {
        return (
            <div className="halfpage">
                {this.props.children}
            </div>
        );
    }
}

export default HalfPage;
