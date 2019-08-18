import React from "react";
import { Menu, Input } from 'semantic-ui-react';
import { getLifepathSettings } from '#Utilities/data.js';
import categories from '#Resources/config/categories.js';
import skills from '#Resources/skills/skills.js';
import traits from '#Resources/traits/traits.js';
import SidebarContent from './SidebarContent/SidebarContent.jsx';
import './Sidebar.scss';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: ""
        }
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    handleFilterChange({ target }) {
        this.setState({
            filter: target.value
        });
    }

    getDataFromCategory(category, subCategory) {
        switch (category) {
            case 'lifepaths':
                return getLifepathSettings(subCategory);
            case 'skills':
                return skills;
            case 'traits':
                return traits;
            default:
                return [];
        }
    }

    render() {
        const {
            filter
        } = this.state;
        return (
            <div className="Menu">
                <Menu vertical inverted>
                    <Input
                        icon='search'
                        placeholder='Search...'
                        text={filter}
                        onChange={this.handleFilterChange}
                    />
                    {categories.map(category => (
                        <SidebarContent
                            key={category.name}
                            header={category.name}
                            lifepathCategory={category.subCategory}
                            lifepaths={
                                this.getDataFromCategory(category.category, category.subCategory)
                            }
                            as={category.as}
                            filter={filter}
                        />
                    ))}
                </Menu>
            </div>
        );
    }
};

export default Sidebar;