import React from "react";
import { Menu, Icon } from 'semantic-ui-react';
import { getLifepaths } from '#Utilities/data.js';
import './SidebarContent.scss';

class SidebarContent extends React.Component {

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
        const { as, filter } = this.props;
        return as === 'sidebar' ?
            data :
            data.filter(item =>
                item.name.toLowerCase()
                    .indexOf(filter.toLowerCase()) !== -1
            );
    }

    render() {
        const {
            header,
            content = [],
            as = 'item',
            filter = ""
        } = this.props;
        const {
            closedHeaders
        } = this.state;
        const filteredData = this.getFilteredData(content);

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
                {!closedHeaders.includes(header) && filteredData.map(item => (
                    as === 'sidebar' ?
                        <SidebarContent
                            key={item}
                            header={item}
                            content={getLifepaths(item)}
                            filter={filter}
                        />
                        : <Menu.Item
                            key={item.name}
                            className="sidebar child"
                            as="a"
                            onClick={() => { console.log('clicked ', item.name); }}
                        >
                            {item.name}
                        </Menu.Item>
                ))}
            </Menu.Item>
        );
    }
};

export default SidebarContent;