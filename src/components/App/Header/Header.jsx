import React from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react";
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
                        <Dropdown.Item
                            text="Men"
                            onClick={e => handleClick(e, '/compendium#lifepaths-men')}
                        />
                        <Dropdown.Item
                            text="Elves"
                            onClick={e => handleClick(e, '/compendium#lifepaths-elves')}
                            disabled
                        />
                        <Dropdown.Item
                            text="Dwarves"
                            onClick={e => handleClick(e, '/compendium#lifepaths-dwarves')}
                            disabled
                        />
                        <Dropdown.Item
                            text="Orcs"
                            onClick={e => handleClick(e, '/compendium#lifepaths-orcs')}
                            disabled
                        />
                        <Dropdown.Divider />
                        <Dropdown.Item
                            text="Skills"
                            onClick={e => handleClick(e, '/compendium#skills')}
                        />
                        <Dropdown.Item
                            text="Traits"
                            onClick={e => handleClick(e, '/compendium#traits')}
                        />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu>
        </div>
    );
};

export default Header;