import React from "react";
import { Menu, Icon } from 'semantic-ui-react';
import { getLifepaths } from 'Utilities/data-selectors.js';
import './CompendiumSidebarContent.scss';

class CompendiumSidebarContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            closedHeaders: []
        }
    }

    handleHeaderClick(header) {
        const { closedHeaders } = this.state;
        if (closedHeaders.includes(header)) {
            this.setState({
                closedHeaders: closedHeaders
                    .filter(hdr => hdr !== header)
            });
        } else {
            this.setState({
                closedHeaders: [
                    ...closedHeaders,
                    header
                ]
            });
        }
    }

    getFilteredData(data) {
        const { nested, filter } = this.props;

        return nested ?
            data :
            data.filter(item =>
                item.name.toLowerCase()
                    .indexOf(filter.toLowerCase()) !== -1
            );
    }

    render() {
        const { header, data = [] } = this.props;
        const { closedHeaders } = this.state;
        const filteredData = this.getFilteredData(data);

        return filteredData.length > 0 && (
            <Menu.Item>
                <Menu.Header onClick={() => this.handleHeaderClick(header)}>
                    <Icon
                        name={
                            closedHeaders.includes(header) ?
                                "caret right"
                                : "caret down"
                        }
                    />
                    {header}
                </Menu.Header>
                <div className="Content">
                    {!closedHeaders.includes(header) && filteredData.map((item, index) => (
                        <Menu.Item
                            key={`${item.name}-${index}`}
                            className="sidebar child"
                            as="a"
                            href={`#${item.name.replace(/\s/g, '')}`}
                        >
                            {item.name}
                        </Menu.Item>
                    ))}
                </div>
            </Menu.Item>
        );
    }
};

export default CompendiumSidebarContent;