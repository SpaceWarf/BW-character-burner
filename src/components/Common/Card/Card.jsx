import React from "react";
import { Card, Menu } from 'semantic-ui-react';
import './Card.scss';

const Lifepath = ({ item, centered, children, onClick }) => {
    return (
        <Menu.Item className="Card Lifepath" id={item.name.replace(/\s/g, '')}>
            <Card className={centered ? 'center' : ''} onClick={onClick}>
                {children}
            </Card>
        </Menu.Item>
    );
};

export default Lifepath;