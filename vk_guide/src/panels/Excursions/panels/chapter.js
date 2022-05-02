import React from 'react';
import PropTypes from 'prop-types';
import {
    Panel, 
    PanelHeader, 
    Placeholder,
    Group,
    Div,
    Card,
    Button,
    PanelHeaderBack,
    usePlatform,
    VKCOM,
    ButtonGroup,
    MiniInfoCell,
} from '@vkontakte/vkui';
import { Icon20SmartphoneOutline } from '@vkontakte/icons';
import { CATEGORIES, IS_MOBILE } from '../../../config';
const Chapters = props => {
    const platform = usePlatform();
    const Category = CATEGORIES.find((val, i) => val.category === props.chapter);
    return (
        <Panel id={props.id}>
            <PanelHeader
            left={<PanelHeaderBack label={platform === VKCOM ? "Категории" : undefined}
            onClick={() => window.history.back()} />}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    {Category.name} <Category.mini_icon style={{marginLeft: 5, color: '#99A2AD'}} />
                </div>
                
            </PanelHeader>
            {IS_MOBILE ||
            <Group className='svg-group'>
                <Category.svg /> 
            </Group>
            }
            <Group>
                {IS_MOBILE &&
                <Div>
                    <Card className='svg-group'>
                        <Category.svg style={{minHeight:272, minWidth: 534, marginTop: 20}} /> 
                    </Card>
                </Div>
                }
                <Placeholder className='place-left'>
                    {Category.description}
                    
                </Placeholder>
                <Div style={{paddingLeft: 32}}>
                    <ButtonGroup mode='vertical'>
                        <ButtonGroup>
                            <Button size='m'>
                                Перейти в {'button_text' in Category ? Category.button_text : Category.name}
                            </Button>
                            {IS_MOBILE || <MiniInfoCell before={<Icon20SmartphoneOutline />}>
                                Доступно в мобильном приложении
                            </MiniInfoCell>}
                        </ButtonGroup>
                        
                        {'video_instruction' in Category && 
                        <Button mode='secondary'
                        size='m'
                        target="_blank" rel="noopener noreferrer"
                        href={Category.video_instruction}>
                            Пошаговая видеоинструкция
                        </Button>}
                        
                    </ButtonGroup>
                    
                </Div>
                {IS_MOBILE && <MiniInfoCell style={{paddingLeft: 32}} before={<Icon20SmartphoneOutline />}>
                    Доступно в мобильном приложении
                </MiniInfoCell>}
                
            </Group>
        </Panel>
    )
}
Chapters.propTypes = {
    id: PropTypes.string.isRequired,
    chapter: PropTypes.string.isRequired,
}
export const Chapter = Chapters