import React from 'react';
import PropTypes from 'prop-types';
import {
    Panel, 
    PanelHeader, 
    Placeholder,
    Group,
    SimpleCell,
    Div,
    Card,
} from '@vkontakte/vkui';
import { Icon56LogoVk } from '@vkontakte/icons';
import { CATEGORIES } from '../../../config';
import { useNavigation } from '../../../hooks';

export const Main = props => {
    const { goPanel, activeStory } = useNavigation();
    return (
        <Panel id={props.id}>
            <PanelHeader>
                Экскурсия
            </PanelHeader>
            <Group>
                <Placeholder header='Узнайте о ВКонтакте больше'
                icon={<Icon56LogoVk style={{color: '#0077FF'}} />}>
                    Впервые ВКонтакте, давно не заходили или просто не следили за обновлениями? 
                    Сейчас мы расскажем обо всем. Выбирайте интересующую категорию
                </Placeholder>
            </Group>
            <Group>
                <Div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    <ul style={{
                        columnCount: 2,
                        listStyleType: 'none', 
                        padding: 0, 
                        margin: 0,
                        width: '100%'}}>
                        {CATEGORIES.map((category) => (
                            <li style={{marginBottom: 15}}>
                            <Card onClick={() => {props.setChapter(category.category);goPanel(activeStory, 'chapter', true)}}>
                                <SimpleCell
                                before={category.icon}
                                >
                                    {category.name}
                                </SimpleCell>
                            </Card>
                            </li>
                        ))}
                    </ul>
                    
                </Div>
                
            </Group>

        </Panel>
    )
}