import React from 'react';
import PropTypes from 'prop-types';
import { View } from '@vkontakte/vkui';
import { useNavigation } from '../../hooks';
import { viewsStructure } from '../../config';
import { Main } from './panels';

const Service = props => {
    const { activePanel } = useNavigation();
    return (
        <View activePanel={activePanel} 
        id={props.id}>
            <Main id={viewsStructure.Communites.panels.homepanel} />
        </View>
    )
}
Service.propTypes = {
    id: PropTypes.string.isRequired,
}
export const Services = Service;