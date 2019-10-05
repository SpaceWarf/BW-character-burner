import React from "react";
import { Menu, Input } from 'semantic-ui-react';
import { getDataSetForSection } from '#Utilities/data-selectors.js';
import { sections } from '#Utilities/config/compendium.config.js';
import { getLifepaths } from '#Utilities/data-selectors.js';
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

    getContentComponents(section, dataSet) {
        const { filter } = this.state;
        if (section.type === 'lifepaths') {
            return dataSet.map(section => (
                <CompendiumSidebarContent
                    key={section}
                    header={section}
                    data={getLifepaths(undefined, section)}
                    filter={filter}
                />
            ));
        }
        return <CompendiumSidebarContent
            key={section.name}
            header={section.name}
            data={dataSet}
            filter={filter}
        />;
    }

    render() {
        const { content } = this.props;
        const { filter } = this.state;
        const section = sections[content];
        const dataSet = getDataSetForSection(section.type, section.subType);

        return (
            <div className="Menu">
                <Menu vertical inverted>
                    <Input
                        icon='search'
                        placeholder='Search...'
                        text={filter}
                        onChange={this.handleFilterChange}
                    />
                    {this.getContentComponents(section, dataSet)}
                </Menu>
            </div>
        );
    }
};

export default CompendiumSidebar;