import React from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react";
import logo from '../../assets/images/logo.webp';
import './Header.scss';

const Header = () => {
    return (
        <div className="Header">
            <Menu inverted>
                <Menu.Item>
                    <Image src={logo} size="mini" />
                    <p>Character Burner</p>
                </Menu.Item>
                <Menu.Item
                    name="Editor"
                    active
                />
                <Dropdown text="Compendium" item simple>
                    <Dropdown.Menu>
                        <Dropdown.Header>Lifepaths</Dropdown.Header>
                        <Dropdown.Item>Men</Dropdown.Item>
                        <Dropdown.Item disabled>Elves</Dropdown.Item>
                        <Dropdown.Item disabled>Dwarves</Dropdown.Item>
                        <Dropdown.Item disabled>Orcs</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Skills</Dropdown.Item>
                        <Dropdown.Item>Traits</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu>
        </div>
    );
};

export default Header;