// Bootstrap classes: badge, badge-info, text-muted
import React from 'react';
import HalfPage from './HalfPage';
import '../stylesheets/App.css';



class App extends React.Component {
    render() {
        return (
            <div>
                <HalfPage>
                    <h1>Welcome</h1>
                    <p>Thank you for visiting our webpage!</p>
                    <p>We hope you enjoy our new shiny site!</p>
                </HalfPage>
                <HalfPage>
                    <h1>Welcome</h1>
                    <p>Thank you for visiting our webpage!</p>
                    <p>We hope you enjoy our new shiny site!</p>
                </HalfPage>


            </div>
        );
    }
}

export default App;
