import React, { useEffect, useState } from 'react';
import {
    Panel, 
    PanelHeader, 
    Group,
    SimpleCell,
    Header,
    Avatar,
    PanelSpinner,
} from '@vkontakte/vkui';
import { OFFICIAL_COMMUNITES } from '../../../config';
import {
    Icon16Verified,
} from '@vkontakte/icons';
import { fetchApi } from '../../../Utils';


const GroupCell = ({children, caption, ava, verified, link}) => {
    return(
        <SimpleCell
        multiline
        target="_blank" rel="noopener noreferrer"
        href={link}
        before={<Avatar src={ava} alt='ava' />}
        description={caption}
        >
            <div style={{display: 'flex', alignItems: 'center'}}>
                {children} {verified ? <Icon16Verified style={{marginLeft: 5, color: '#5C9CE6'}} />:''}
            </div>
        </SimpleCell>
    )
}

export const Main = props => {
    const [communitiesInfo, setCommunitiesInfo] = useState(null);
    const getCategoryIds = (category) => {
        return OFFICIAL_COMMUNITES[category].map((cat) => cat.community_id)
    }
    const getGroupInfoInCategory = (category, id) => {
        return OFFICIAL_COMMUNITES[category].find((cat) => cat.community_id === id)
    }
    const getGroupsByIds = (groups) => {
        return communitiesInfo.filter(g => groups.includes(g.id))
    }
    const getCategory = (category) => {
        return getGroupsByIds(getCategoryIds(category)).map((group_info) => (
            <GroupCell
            key={group_info.id}
            ava={group_info.photo_100}
            verified={group_info.verified}
            caption={getGroupInfoInCategory(category, group_info.id).description}
            link={'https://vk.com/' + group_info.screen_name}>
                {group_info.name}
            </GroupCell>
        ))
    }
    useEffect(() => {
        fetchApi('groups.getById', {
            group_ids: Object.keys(OFFICIAL_COMMUNITES).map((category, i) => 
            (OFFICIAL_COMMUNITES[category].map((community) => 
            community.community_id)
            )).flat().join(','),
            fields: 'verified',
        }, window)
        .then(data => data.json())
        .then((data) => {
            setCommunitiesInfo(data.response);
        })
        .catch((e) => console.log(e))
        
    }, []);
    return (
        <Panel id={props.id}>
            <PanelHeader>
                Сообщества
            </PanelHeader>
            {!communitiesInfo && <Group>
                <PanelSpinner />
            </Group>}
            {communitiesInfo && <>
            <Group header={<Header>Новости</Header>}>
                {getCategory('news')}
            </Group>
            <Group header={<Header>Региональные представители</Header>}>
                {getCategory('countries')}
            </Group>
            <Group header={<Header>Новости и безопасность</Header>}>
                {getCategory('security')}
            </Group>
            <Group header={<Header>Разработка</Header>}>
                {getCategory('development')}
            </Group>
            <Group header={<Header>Продукт</Header>}>
                {getCategory('products')}
            </Group>
            <Group header={<Header>Мобильные приложения</Header>}>
                {getCategory('mobile_apps')}
            </Group>
            <Group header={<Header>Дизайн</Header>}>
                {getCategory('design')}
            </Group>
            <Group header={<Header>Бизнес</Header>}>
                {getCategory('business')}
            </Group>
            <Group header={<Header>Благотворительность</Header>}>
                {getCategory('charity')}
            </Group>
            <Group header={<Header>Игры и киберспорт</Header>}>
                {getCategory('games')}
            </Group>
            <Group header={<Header>Спорт</Header>}>
                {getCategory('sport')}
            </Group>
            <Group header={<Header>Музыка, контент и развлечения</Header>}>
                {getCategory('music')}
            </Group>
            <Group header={<Header>Образование</Header>}>
                {getCategory('education')}
            </Group>
            </>}
        </Panel>
    )
}