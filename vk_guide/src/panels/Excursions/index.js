import React from 'react';
import PropTypes from 'prop-types';
import { View } from '@vkontakte/vkui';
import { useNavigation } from '../../hooks';
import { viewsStructure } from '../../config';
import { Chapter, Main } from './panels';

const Excursion = props => {
    const { activePanel } = useNavigation();
    const { setChapter, chapter } = props;
    return (
        <View activePanel={activePanel} 
        id={props.id}>
            <Main id={viewsStructure.Excursions.panels.homepanel}
            setChapter={setChapter} />
            <Chapter id='chapter' chapter={chapter} />
        </View>
    )
}
Excursion.propTypes = {
    id: PropTypes.string.isRequired,
}
export const Excursions = Excursion;