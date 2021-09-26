import React from 'react';
import { Card} from 'react-bootstrap';
import logo from './../image/logo.png';

const Header = () => {
    return (
        <div>
            <Card className="text-center">
                <Card.Header>
                    <img src={logo} alt="" />
                   <p> <small>EST: 2021</small></p>
                   <h4>Monthly Average sellary: $10,0000 USD</h4>
                    <h3>Teacher List</h3>
                </Card.Header>
               
            </Card>
        </div>
    );
};

export default Header;