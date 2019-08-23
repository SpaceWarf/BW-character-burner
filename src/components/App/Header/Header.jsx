import React from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react";
import { headerDropdownItems } from '#Utilities/config/app.config.js';
import logo from '#Assets/images/logo.webp';
import './Header.scss';

const handleClick = (e, route) => {
    e.stopPropagation();
    window.location.href = route;
};

const Header = () => {
    return (
        <div className="Header">
            <Menu inverted>
                <Menu.Item
                    onClick={e => handleClick(e, '/')}
                >
                    <Image src={logo} size="mini" />
                    <p>Cynder</p>
                </Menu.Item>
                <Menu.Item
                    name="Editor"
                    onClick={e => handleClick(e, '/editor')}
                />
                <Dropdown
                    text="Compendium"
                    onClick={e => handleClick(e, '/compendium')}
                    item
                    simple
                >
                    <Dropdown.Menu>
                        <Dropdown.Header>Lifepaths</Dropdown.Header>
                        {headerDropdownItems.map(item => (
                            item.isDivider
                                ? <Dropdown.Divider key="divider" />
                                : <Dropdown.Item
                                    key={item.text}
                                    text={item.text}
                                    onClick={e => handleClick(e, `/compendium#${item.link}`)}
                                    disabled={item.disabled}
                                />
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </Menu>
        </div>
    );
};

export default Header;