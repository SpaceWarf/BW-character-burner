import React from "react";
import { connect } from 'react-redux';
import { Header, Card, Icon, List } from 'semantic-ui-react';
import {
    getAge,
    getAllSkills,
    getAllTraits,
    getHealthScore,
    getSteelScore,
    getReflexScore,
    getMortalWoundScore,
    getResourcesScore,
    getCirclesScore
} from '#Utilities/redux-selectors.js';
import { setCharacterName } from '#Actions/editor.js';
import CustomInput from '#Components/Common/CustomInput/CustomInput.jsx';
import PhysicalTolerancesTable from "./PhysicalTolerancesTable/PhysicalTolerancesTable";
import './FinalizeSection.scss';

class FinalizeSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditingName: true
        };
    }

    onSetCharacterName(name) {
        const { onUpdateCharacterName } = this.props;
        this.setState({ isEditingName: false });
        onUpdateCharacterName(name);
    }

    getResourceComponent(item) {
        switch (item.category) {
            case 'arm':
                return <ArmResource item={item} />
            case 'missile':
                return <MissileResource item={item} />
            case 'fullArmor':
                return <FullArmorResource item={item} />
            case 'partsArmor':
                return <PartsArmorResource item={item} />
            case 'relationship':
                return <RelationshipResource item={item} />
            case 'simple':
            case 'property':
            case 'reputation':
            case 'affiliation':
            default:
                return <SimpleResource item={item} />;
        }
    };

    isResourceSectionEmpty(types) {
        const { resources } = this.props;
        const resourcesOfTypes = resources.boughtResources
            .filter(resource => types.includes(resource.category));
        return resourcesOfTypes.length === 0;
    }

    render() {
        const {
            name,
            race,
            age,
            lifepaths,
            stats,
            healthScore,
            reflexScore,
            steelScore,
            mortalWoundScore,
            traits,
            skills,
            resources,
            resourcesScore,
            circlesScore
        } = this.props;
        const { isEditingName } = this.state;

        return (
            <div className="FinalizeSection">
                <Header className="section" as="h1">Finalize your character</Header>
                <div className="content">
                    <p>
                        <b>Disclaimer:</b> This section is not meant to be printed. You will be missing a lot of important information like advancements, beliefs and instincts. Use this section instead as a medium to transcribe all your character's information on an actual character sheet. You can get the official Burning Wheel character sheets for free <a onClick={() => window.open("https://www.burningwheel.com/burning-wheel-gold-play-sheet-pdfs/")}>here</a>.
                    </p>
                    <div className="ContentRow">
                        <Card className="DetailsCard flex">
                            <Card.Content>
                                <Card.Description>
                                    <div className="Name halfs">
                                        <div>
                                            <b>Name</b>
                                            {!isEditingName && <Icon name='edit' onClick={() => this.setState({ isEditingName: true })} link />}
                                        </div>
                                        {isEditingName
                                            ? <CustomInput
                                                placeholder="Character's name..."
                                                canCancel={name && name !== ""}
                                                allowEmpty={false}
                                                onConfirm={value => this.onSetCharacterName(value)}
                                                onCancel={() => this.setState({ isEditingName: false })}
                                            />
                                            : <p className="value">{name}</p>
                                        }
                                    </div>
                                    <div className="Race fourths">
                                        <div><b>Stock</b></div>
                                        <p className="value">{race}</p>
                                    </div>
                                    <div className="Age fourths">
                                        <div><b>Age</b></div>
                                        <p className="value">{age}</p>
                                    </div>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </div>
                    <div className="ContentRow">
                        <div className="Stats halfs">
                            <Card className="StatsCard flex">
                                <Card.Content>
                                    <Card.Header><p>Stats</p></Card.Header>
                                    <Card.Description>
                                        <div className="Will stat thirds">
                                            <p>Will</p>
                                            <p>{stats.will}</p>
                                        </div>
                                        <div className="Power stat thirds">
                                            <p>Power</p>
                                            <p>{stats.power}</p>
                                        </div>
                                        <div className="Agility stat thirds">
                                            <p>Agility</p>
                                            <p>{stats.agility}</p>
                                        </div>
                                        <div className="Perception stat thirds">
                                            <p>Perception</p>
                                            <p>{stats.perception}</p>
                                        </div>
                                        <div className="Forte stat thirds">
                                            <p>Forte</p>
                                            <p>{stats.forte}</p>
                                        </div>
                                        <div className="Speed stat thirds">
                                            <p>Speed</p>
                                            <p>{stats.speed}</p>
                                        </div>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>
                        <div className="Attributes halfs">
                            <Card className="AttributesCard flex">
                                <Card.Content>
                                    <Card.Header><p>Attributes</p></Card.Header>
                                    <Card.Description>
                                        <div className="Health stat thirds">
                                            <p>Health</p>
                                            <p>{healthScore}</p>
                                        </div>
                                        <div className="Reflex stat thirds">
                                            <p>Reflex</p>
                                            <p>{reflexScore}</p>
                                        </div>
                                        <div className="Steel stat thirds">
                                            <p>Steel</p>
                                            <p>{steelScore}</p>
                                        </div>
                                        <div className="MortalWound stat thirds">
                                            <p>Mortal Wound</p>
                                            <p>{mortalWoundScore}</p>
                                        </div>
                                        <div className="Resource attribute thirds">
                                            <p>Resources</p>
                                            <p>{resourcesScore}</p>
                                        </div>
                                        <div className="Circles attribute thirds">
                                            <p>Circles</p>
                                            <p>{circlesScore}</p>
                                        </div>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>
                    </div>
                    <div className="ContentRow">
                        <div className="Lifepaths thirds">
                            <Card className="LifepathsCard">
                                <Card.Content>
                                    <Card.Header><p>Lifepaths</p></Card.Header>
                                    <Card.Description>
                                        {lifepaths.map(({ lifepath }) => (
                                            <p key={lifepath.name}>{lifepath.name}</p>
                                        ))}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>
                        <div className="Skills thirds">
                            <Card className="SkillsCard">
                                <Card.Content>
                                    <Card.Header><p>Skills</p></Card.Header>
                                    <Card.Description>
                                        {skills.map(skill => (
                                            <p key={skill.name}>{skill.name}</p>
                                        ))}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>
                        <div className="Traits thirds">
                            <Card className="TraitsCard">
                                <Card.Content>
                                    <Card.Header><p>Traits</p></Card.Header>
                                    <Card.Description>
                                        {traits.map(trait => (
                                            <p key={trait.name}>{trait.name}</p>
                                        ))}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>
                    </div>
                    <div className="ContentRow">
                        <div className="Resources halfs">
                            <Card className="ResourcesCard flex">
                                <Card.Content>
                                    <Card.Header><p>Simple Resources</p></Card.Header>
                                    <Card.Description>
                                        {this.isResourceSectionEmpty(["simple"])
                                            ? <p>Nothing here.</p>
                                            : resources.boughtResources
                                                .filter(resource => ["simple"].includes(resource.category))
                                                .map(resource => (
                                                    this.getResourceComponent(resource)
                                                ))
                                        }
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>
                        <div className="Properties halfs">
                            <Card className="PropertiesCard flex">
                                <Card.Content>
                                    <Card.Header><p>Properties</p></Card.Header>
                                    <Card.Description>
                                        {this.isResourceSectionEmpty(["property"])
                                            ? <p>Nothing here.</p>
                                            : resources.boughtResources
                                                .filter(resource => ["property"].includes(resource.category))
                                                .map(resource => (
                                                    this.getResourceComponent(resource)
                                                ))
                                        }
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>
                    </div>
                    <div className="ContentRow">
                        <div className="Armor halfs">
                            <Card className="ResourcesCard flex">
                                <Card.Content>
                                    <Card.Header><p>Arms & Armor</p></Card.Header>
                                    <Card.Description>
                                        {this.isResourceSectionEmpty(["fullArmor", "partsArmor", "arms", "missile"])
                                            ? <p>Nothing here.</p>
                                            : resources.boughtResources
                                                .filter(resource => ["fullArmor", "partsArmor", "arms", "missile"].includes(resource.category))
                                                .map(resource => (
                                                    this.getResourceComponent(resource)
                                                ))
                                        }
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>
                        <div className="Relationships halfs">
                            <Card className="RelationshipsCard flex">
                                <Card.Content>
                                    <Card.Header><p>Relationships & Reputations</p></Card.Header>
                                    <Card.Description>
                                        {this.isResourceSectionEmpty(["relationship", "reputation", "affiliation"])
                                            ? <p>Nothing here.</p>
                                            : resources.boughtResources
                                                .filter(resource => ["relationship", "reputation", "affiliation"].includes(resource.category))
                                                .map(resource => (
                                                    this.getResourceComponent(resource)
                                                ))
                                        }
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>
                    </div>
                    <div className="Tolerances">
                        <h3>Physical Tolerances</h3>
                        <PhysicalTolerancesTable></PhysicalTolerancesTable>
                    </div>
                </div>
            </div>
        );
    }
}

const SimpleResource = ({ item }) => {
    return (
        <div className="SimpleResource resource halfs">
            <b>{item.name}</b>
            <p>{item.note}</p>
        </div>
    );
};

const ArmResource = ({ item }) => {
    return (
        <div className="ArmsResource resource full">
            <b>{`${item.quality.name} Quality Arms`}</b>
            <p>{item.note}</p>
            <List bulleted>
                {item.modifications.map(modif => (
                    <List.Item>
                        <List.Content>{modif}</List.Content>
                    </List.Item>
                ))}
            </List>
        </div>
    );
};

const MissileResource = ({ item }) => {
    return (
        <div className="MissileResource resource full">
            <b>{`${item.quality.name} Quality ${item.type.name}`}</b>
            <p>{item.note}</p>
            <List bulleted>
                {item.addons.map(addon => (
                    <List.Item>
                        <List.Content>{addon}</List.Content>
                    </List.Item>
                ))}
            </List>
        </div>
    );
};

const FullArmorResource = ({ item }) => {
    return (
        <div className="FullArmorResource resource full">
            <b>{`${item.quality.name} Quality ${item.type.name}`}</b>
            <p>{item.note}</p>
        </div>
    );
};

const PartsArmorResource = ({ item }) => {
    return (
        <div className="PartsArmorResource resource full">
            <b>Parts Armor</b>
            <p>{item.note}</p>
            <List bulleted>
                {Object.keys(item.selectedParts).map(part => (
                    <List.Item key={item.selectedParts[part].type.name}>
                        <List.Content>
                            {`${part[0].toUpperCase()}${part.slice(1)} - ${item.selectedParts[part].quality.name} Quality ${item.selectedParts[part].type.name}`}
                        </List.Content>
                    </List.Item>
                ))}
            </List>
        </div>
    );
};

const RelationshipResource = ({ item }) => {
    return (
        <div className="RelationshipResource resource halfs">
            <b>Relationship</b>
            <p>{item.note}</p>
            <List bulleted>
                {item.modifiers.map(modifier => (
                    <List.Item key={modifier.name}>
                        <List.Content>{modifier.name}</List.Content>
                    </List.Item>
                ))}
            </List>
        </div>
    );
};

const mapStateToProps = state => ({
    name: state.editor.characterName,
    race: state.editor.selectedRace,
    lifepaths: state.editor.lifepaths.selectedLifepaths,
    stats: state.editor.stats.selectedStats,
    age: getAge(state),
    skills: getAllSkills(state),
    traits: getAllTraits(state),
    healthScore: getHealthScore(state),
    steelScore: getSteelScore(state),
    reflexScore: getReflexScore(state),
    mortalWoundScore: getMortalWoundScore(state),
    resources: state.editor.resources,
    resourcesScore: getResourcesScore(state),
    circlesScore: getCirclesScore(state)
});


const mapDispatchToProps = dispatch => ({
    onUpdateCharacterName: name => dispatch(setCharacterName(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(FinalizeSection);
