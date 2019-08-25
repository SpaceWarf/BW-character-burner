import React from "react";
import AddModal from '#Components/Common/AddModal/AddModal.jsx';
import Lifepath from '#Components/Common/Card/Lifepath/Lifepath.jsx';
import Skill from '#Components/Common/Card/Skill/Skill.jsx';
import Trait from '#Components/Common/Card/Trait/Trait.jsx';
import './ItemList.scss';

const ItemList = ({ header, items, type, choices, maxCount, sections, onSelect, onRemove }) => {

    const getItemComponent = (item, onClick) => {
        switch (type) {
            case 'lifepath':
                return <Lifepath
                    key={item.name}
                    lifepath={item}
                    onClick={() => onClick(item)}
                />;
            case 'skill':
                return <Skill
                    key={item.name}
                    skill={item}
                    onClick={() => onClick(item)}
                />;
            case 'trait':
                return <Trait
                    key={item.name}
                    trait={item}
                    onClick={() => onClick(item)}
                />;
            default:
                <p>No component for item type</p>
        }
    }

    return (
        <div className="ItemList">
            <div className="ListContent">
                {items.map(item => (
                    getItemComponent(item, onRemove)
                ))}
            </div>
            <div className="insert">
                {(!maxCount || items.length < maxCount) &&
                    <AddModal
                        header={header}
                        type={type}
                        choices={choices}
                        sections={sections}
                        onSelect={onSelect}
                    />
                }
            </div>
        </div>
    );
}

export default ItemList;