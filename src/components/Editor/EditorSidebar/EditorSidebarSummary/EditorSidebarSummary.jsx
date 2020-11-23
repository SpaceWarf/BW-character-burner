import React from "react";
import { connect } from 'react-redux';
import { Menu, Header } from 'semantic-ui-react';
import {
    getAge,
    getAllSkills,
    getAllTraits,
    getHealthScore,
    getSteelScore,
    getReflexScore,
    getMortalWoundScore
} from 'Utilities/redux-selectors.js';
import CardListModal from 'Components/Common/CardListModal/CardListModal.jsx';
import './EditorSidebarSummary.scss';

const EditorSidebarSummary = ({
    race,
    lifepaths,
    stats,
    age,
    skills,
    traits,
    healthScore,
    steelScore,
    reflexScore,
    mortalWoundScore
}) => {
    return (
        <Menu.Item className="EditorSidebarSummary">
            <Header as="h2" className="MainHeader">Character Summary</Header>
            <div className="block StockAge">
                <div className="thirds">
                    <p className="label">Stock :</p>
                    <p className="value">{race || "—"}</p>
                </div>
                <div className="thirds">
                    <p className="label">Age :</p>
                    <p className="value">{age || 0}</p>
                </div>
                <div className="thirds">
                    <p className="label">Lifepaths :</p>
                    <p className="value">{lifepaths.length || 0}</p>
                    {lifepaths.length > 0 && <CardListModal
                        header="Character lifepaths"
                        data={lifepaths.map(lifepath => lifepath.lifepath)}
                        type="lifepath"
                    />}
                </div>
            </div>
            <Header as="h3" className="SectionHeader">Stats</Header>
            <div className="block Stats">
                <div className="thirds">
                    <p className="label">Will :</p>
                    <p className="value">{stats.will || 0}</p>
                </div>
                <div className="thirds">
                    <p className="label">Perception :</p>
                    <p className="value">{stats.perception || 0}</p>
                </div>
                <div className="thirds">
                    <p className="label">Power :</p>
                    <p className="value">{stats.power || 0}</p>
                </div>
                <div className="thirds">
                    <p className="label">Forte :</p>
                    <p className="value">{stats.forte || 0}</p>
                </div>
                <div className="thirds">
                    <p className="label">Agility :</p>
                    <p className="value">{stats.agility || 0}</p>
                </div>
                <div className="thirds">
                    <p className="label">Speed :</p>
                    <p className="value">{stats.speed || 0}</p>
                </div>
            </div>
            <Header as="h3" className="SectionHeader">Skills & Traits</Header>
            <div className="block SkillsTraits">
                <div>
                    <p className="label">Skills :</p>
                    <p className="value">{skills.length || 0}</p>
                    {skills.length > 0 && <CardListModal
                        header="Character skills"
                        data={skills}
                        type="skill"
                    />}
                </div>
                <div>
                    <p className="label">Traits :</p>
                    <p className="value">{traits.length || 0}</p>
                    {traits.length > 0 && <CardListModal
                        header="Character traits"
                        data={traits}
                        type="trait"
                    />}
                </div>
            </div>
            <Header as="h3" className="SectionHeader">Attributes</Header>
            <div className="block Attributes">
                <div className="halfs">
                    <p className="label">Health :</p>
                    <p className="value">{healthScore || 0}</p>
                </div>
                <div className="halfs">
                    <p className="label">Steel :</p>
                    <p className="value">{steelScore || 0}</p>
                </div>
                <div className="halfs">
                    <p className="label">Reflexes :</p>
                    <p className="value">{reflexScore || 0}</p>
                </div>
                <div className="halfs">
                    <p className="label">Mortal Wound :</p>
                    <p className="value">{mortalWoundScore || 0}</p>
                </div>
            </div>
        </Menu.Item>
    );
};

const mapStateToProps = state => ({
    race: state.editor.selectedRace,
    lifepaths: state.editor.lifepaths.selectedLifepaths,
    stats: state.editor.stats.selectedStats,
    age: getAge(state),
    skills: getAllSkills(state),
    traits: getAllTraits(state),
    healthScore: getHealthScore(state),
    steelScore: getSteelScore(state),
    reflexScore: getReflexScore(state),
    mortalWoundScore: getMortalWoundScore(state)
});


const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(EditorSidebarSummary);