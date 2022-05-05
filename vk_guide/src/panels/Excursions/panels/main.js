import React from 'react';
import {
    Panel, 
    PanelHeader, 
    Placeholder,
    Group,
    SimpleCell,
    Div,
    Card,
    MiniInfoCell,
} from '@vkontakte/vkui';
import { Icon20PinOutline } from '@vkontakte/icons';

import { SVGLogo } from '../../../svg';
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
                className='vk-sans placeholder-mini'
                icon={<SVGLogo />}>
                    Впервые ВКонтакте, давно не заходили или просто не следили за обновлениями? 
                    Сейчас мы расскажем обо всем. Выбирайте интересующую категорию
                    <Card style={{marginTop: 30, textAlign: 'left'}}>
                        <MiniInfoCell
                        before={<Icon20PinOutline />}
                        textWrap='full'>
                            Данный сервис не является официальным продуктом ВКонтакте. Друзья, не дайте себя обмануть!
                        </MiniInfoCell>
                    </Card>
                </Placeholder>
                <Div>
                    
                </Div>
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
                            <li key={category.name} style={{marginBottom: 15}}>
                            <Card onClick={() => {props.setChapter(category.category);goPanel(activeStory, 'chapter', true)}}>
                                <SimpleCell
                                style={{borderRadius: 8}}
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