import React from "react";
import { Card, Menu, Icon } from 'semantic-ui-react';
import './Card.scss';

const CustomCard = ({ item, centered, children, positive, onClick }) => {
    return (
        <Menu.Item className="Card" id={item.name.replace(/\s/g, '')}>
            <Card className={centered ? 'center' : ''} onClick={onClick}>
                {children}
                {onClick && <div className={positive ? "overlay positive" : "overlay negative"}>
                    <Icon
                        className={positive ? "positive" : "negative"}
                        name={positive ? "check" : "cancel"}
                        size="huge"
                    />
                </div>}
            </Card>
        </Menu.Item>
    );
};

export default CustomCard;