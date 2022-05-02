import React from 'react'; 

import {
    Cell,
    
} from '@vkontakte/vkui';

export const EpicItemPC = props => {
    return(
    <Cell
        badge={props.badge}
        disabled={props.activeStory === props.story}
        style={props.activeStory === props.story ? {
            backgroundColor: "var(--button_secondary_background)",
            borderRadius: 8
        } : {}}
        data-story={props.story}
        onClick={props.onClick}
        before={props.icon}>
            {props.children}
    </Cell>
    )
    
}
