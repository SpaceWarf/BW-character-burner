import React from "react";
import { Header, Image, Button, Pagination } from 'semantic-ui-react';
import './LandingPage.scss';

const importAll = folder => {
    return folder.keys()
        .map(item => folder(item))
        .sort(() => Math.random() - 0.5);
};

const images = importAll(require.context('../../assets/images/portraits', false, /\.(png|jpe?g|svg)$/));

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageIndex: Math.round(Math.random() * (images.length - 1))
        };
        this.interval = window.setInterval(() => {
            const { imageIndex } = this.state;
            this.setState({
                imageIndex: (imageIndex + 1) % images.length
            });
        }, 5000);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentWillUnmount() {
        clearImmediate(this.interval);
    }

    handlePageChange(page) {
        this.setState({
            imageIndex: page
        });
        clearInterval(this.interval);
    }

    render() {
        const { imageIndex } = this.state;
        return (
            <div className="LandingPage">
                <div className="content">
                    <Header className="title" as="h1">Welcome to Cynder</Header>
                    <Header className="subtitle" as="h3">A Burning Wheel character burner</Header>
                    <p className="tag">
                        Forget hours and hours of character burning while going over hundreds of pages of rules. <b>Cynder</b> is the most efficient character burner available. Head over to the <b><a href="/editor">Editor</a></b> to start working on your next character or check out the <b><a href="/Compendium">Compendium</a></b> if you need data references.
                        <div>
                            <Button
                                icon="edit"
                                content="Start Creating"
                                labelPosition="left"
                                onClick={() => window.location = "/editor"}
                                positive
                            />
                        </div>
                    </p>
                    <div className="socials">
                        <Button.Group vertical>
                            <Button
                                icon="github"
                                content="SpaceWarf"
                                labelPosition="left"
                                onClick={() => window.open("https://github.com/SpaceWarf")}
                            />
                            <Button
                                icon="twitter"
                                content="@Space_warf"
                                labelPosition="left"
                                onClick={() => window.open("https://twitter.com/Space_warf")}
                            />
                        </Button.Group>
                    </div>
                </div>
                <div className="image">
                    <Image src={images[imageIndex]} size='massive' />
                    <Pagination
                        activePage={imageIndex + 1}
                        firstItem={null}
                        lastItem={null}
                        totalPages={images.length}
                        onPageChange={(_, { activePage }) => this.handlePageChange(activePage - 1)}
                        secondary
                    />
                </div>
            </div>
        );
    }
}

export default LandingPage;