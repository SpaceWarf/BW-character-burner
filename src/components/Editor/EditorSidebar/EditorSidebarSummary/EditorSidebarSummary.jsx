import React from "react";
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import {
    getAllSkills,
    getAllTraits,
    getHealthScore,
    getSteelScore,
    getReflexScore,
    getMortalWoundScore
} from '#Utilities/redux-selectors.js';
import './EditorSidebarSummary.scss';

const EditorSidebarSummary = ({
    selectedRace,
    selectedLifepaths,
    selectedStats,
    skills,
    traits,
    healthScore,
    steelScore,
    reflexScore,
    mortalWoundScore
}) => {
    return (
        <Menu.Item className="EditorSidebarSummary">
            <Menu.Header className="MainHeader">Character Summary</Menu.Header>
            <div className="block StockAge">
                <p className="halfs">Stock: {selectedRace || "—"}</p>
                <p className="halfs">Age: {false || 0}</p>
            </div>
            <p>Lifepaths: {selectedLifepaths.length || 0}</p>
            <Menu.Header className="SectionHeader">Stats</Menu.Header>
            <div className="block MentalStats">
                <p className="halfs">Will: {selectedStats.will || 0}</p>
                <p className="halfs">Perception: {selectedStats.perception || 0}</p>
            </div>
            <div className="block PhysicalStats">
                <p className="halfs">Forte: {selectedStats.forte || 0}</p>
                <p className="halfs">Power: {selectedStats.power || 0}</p>
                <p className="halfs">Agility: {selectedStats.agility || 0}</p>
                <p className="halfs">Speed: {selectedStats.speed || 0}</p>
            </div>
            <p>Skills: {skills.length || 0}</p>
            <p>Traits: {traits.length || 0}</p>
            <Menu.Header className="SectionHeader">Attributes</Menu.Header>
            <div className="block Attributes">
                <p className="halfs">Health: {healthScore || 0}</p>
                <p className="halfs">Steel: {steelScore || 0}</p>
                <p className="halfs">Reflexes: {reflexScore || 0}</p>
                <p className="halfs">Mortal Wound: {mortalWoundScore || 0}</p>
            </div>
        </Menu.Item>
    );
};

const mapStateToProps = state => ({
    selectedRace: state.editor.selectedRace,
    selectedLifepaths: state.editor.lifepaths.selectedLifepaths,
    selectedStats: state.editor.stats.selectedStats,
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