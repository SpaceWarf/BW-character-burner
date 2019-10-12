import React from "react";
import { Header, Button, Image } from 'semantic-ui-react';
import logo from '#Assets/images/logo.webp';
import './LandingPage.scss';

const LandingPage = () => {
    return (
        <div className="LandingPage">
            <div className="content">
                <div className="MainHeader">
                    <Image src={logo} />
                    <div className="Title">
                        <Header className="title" as="h1">Welcome to Cynder</Header>
                        <Header className="subtitle" as="h3">A Burning Wheel character burner</Header>
                    </div>
                </div>
                <div className="tag">
                    <p>
                        Forget hours and hours of character burning while going over hundreds of pages of rules. Head over to the <a href="/editor">Editor</a> to start working on your next character or check out the <a href="/Compendium">Compendium</a> if you need data references.
                    </p>
                    <p>
                        This is an open-source project. You can find the code on <a onClick={() => window.open("https://github.com/SpaceWarf/bw-character-burner")}>Github</a> and a project roadmap on <a onClick={() => window.open("https://trello.com/b/sJ5q6ft7/cynder")}>Trello</a>.
                    </p>
                </div>
                <div className="button">
                    <Button
                        icon="edit"
                        content="Start Burning"
                        labelPosition="left"
                        onClick={() => window.location = "/editor"}
                        positive
                    />
                </div>
            </div>
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
    );
}

export default LandingPage;