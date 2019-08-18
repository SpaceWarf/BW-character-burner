import React from "react";
import { Menu, Input } from 'semantic-ui-react';
import { getDataSetFromCategory } from '#Utilities/data.js';
import categories from '#Resources/config/categories.js';
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
                            lifepathCategory={category.subType}
                            lifepaths={
                                getDataSetFromCategory(category.type, category.subType)
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