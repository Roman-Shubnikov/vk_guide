import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';
import {
    Panel, 
    PanelHeader, 
    Placeholder,
    Group,
    Div,
    Avatar,
    Button,
    PanelHeaderBack,
    usePlatform,
    VKCOM,
    ButtonGroup,
    MiniInfoCell,
    RichCell,
    Card,
    Spacing,
    PanelSpinner,
    IOS,
} from '@vkontakte/vkui';
import { Icon16Verified, Icon20SmartphoneOutline } from '@vkontakte/icons';
import { CATEGORIES, IMAGES_URL, IS_MOBILE } from '../../../config';
import { enumerate } from '../../../Utils';
import { useUser } from '../../../hooks';
const Chapters = props => {
    const platform = usePlatform();
    const [community, setCommunity] = useState(null);
    const { userToken } = useUser();
    const Category = CATEGORIES.find((val, i) => val.category === props.chapter);
    useEffect(() => {
        if(Category && userToken && 'community_id' in Category) {
            bridge.send("VKWebAppCallAPIMethod",
            { 
                method: 'groups.getById',
                params: {
                    group_id: Category.community_id, 
                    access_token: userToken, 
                    fields: 'verified,members_count',
                    v: '5.131',
                },
                
            })
            .then((data) => {
                console.log(data.response[0]);
                setCommunity(data.response[0]);
            })
            .catch((e) => console.log(e))
        }
        
    }, [Category, userToken]);
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
                <img 
                className='chapter_header-img'
                src={IMAGES_URL + Category.img}
                alt={Category.name} />
            </Group>
            }
            <Group>
                {IS_MOBILE &&
                <Div>
                    <Card className='svg-group'>
                        <img 
                        className='chapter_header-img'
                        src={IMAGES_URL + Category.img}
                        alt={Category.name} />
                    </Card>
                </Div>
                }
                {'community_id' in Category && (community ? <>
                <RichCell
                target="_blank" rel="noopener noreferrer"
                href={'https://vk.com/' + community.screen_name}
                caption={community.members_count.toLocaleString() + ' ' + enumerate(community.members_count, ['подписчик', 'подписчика', 'подписчиков'])}
                before={<Avatar size={72} src={community.photo_100} alt='ava' />}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        {community.name} {community.verified ? <Icon16Verified style={{marginLeft: 5, color: '#5C9CE6'}} />: ''}
                    </div>
                </RichCell>
                <Spacing separator />
                </> : <PanelSpinner height={96} />)}
                <Placeholder className='place-left'>
                    {Category.description}
                    
                </Placeholder>
                {(Category.ios_restrict && platform === IOS) || <Div style={{paddingLeft: 32}}>
                    <ButtonGroup mode='vertical'>
                        <ButtonGroup>
                            {'link_button' in Category && <Button size='m'
                            target="_blank" rel="noopener noreferrer"
                            href={Category.link_button}>
                                Перейти в {'button_text' in Category ? Category.button_text : Category.name.toLowerCase()}
                            </Button>}
                            {!IS_MOBILE && Category.access_on_mobile && <MiniInfoCell before={<Icon20SmartphoneOutline />}>
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
                        {'addition' in Category && 
                        Category.addition}
                    </ButtonGroup>
                    
                </Div>}
                {IS_MOBILE && Category.access_on_mobile && <MiniInfoCell style={{paddingLeft: 32}} before={<Icon20SmartphoneOutline />}>
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