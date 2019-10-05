import React from "react";
import { Menu, Button, Icon } from 'semantic-ui-react';
import './CollapsableSidebar.scss';

class CollapsableSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { collapsed } = this.state;
        this.setState({
            collapsed: !collapsed
        });
    }

    render() {
        const { children, className } = this.props;
        const { collapsed } = this.state
        return (
            <div className={`${className} CollapsableSidebar`}>
                <Menu
                    className={`${collapsed ? "Collapsed" : ""}`}
                    vertical
                    inverted
                >
                    {children}
                </Menu>
                <div
                    className={`${collapsed ? "Collapsed Collapse" : "Collapse"}`}
                    onClick={this.handleClick}
                >
                    <Icon
                        name={collapsed ? "angle right" : "angle left"}
                        size="small"
                        circular
                    />
                </div>
            </div>
        );
    }
}

export default CollapsableSidebar;
