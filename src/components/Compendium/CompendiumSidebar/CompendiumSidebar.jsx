import React from "react";
import { Menu, Input } from 'semantic-ui-react';
import { getDataSetForSection } from '#Utilities/selectors.js';
import { sections } from '#Utilities/config/compendium.config.js';
import CompendiumSidebarContent from './CompendiumSidebarContent/CompendiumSidebarContent.jsx';
import './CompendiumSidebar.scss';

class CompendiumSidebar extends React.Component {
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
                    {sections.map(section => (
                        <CompendiumSidebarContent
                            key={section.name}
                            header={section.name}
                            lifepathCategory={section.subType}
                            lifepaths={
                                getDataSetForSection(section.type, section.subType)
                            }
                            nested={section.nested}
                            filter={filter}
                        />
                    ))}
                </Menu>
            </div>
        );
    }
};

export default CompendiumSidebar;