import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import {
    Panel, 
    PanelHeader, 
    Placeholder,
    Group,
    Div,
    Header,
    HorizontalScroll,
    SegmentedControl,
    Avatar,
    SimpleCell,
    Banner,
    Button,
} from '@vkontakte/vkui';
import { SVGFeathering, SVGMiniapps, SVGServicevk } from '../../../svg';
import {
    Icon56MessageOutline,
    Icon56AdvertisingOutline,
    Icon24CheckCircleOutline,
} from '@vkontakte/icons';
import { CHANNELS, CHANNELS_IMG_URL, SERVICES } from '../../../config';
const Cards = [
    {
        link: 'https://vk.com/@guidevk-channel',
        svg: SVGMiniapps,
    },
    {
        link: 'https://vk.com/@guidevk-chats',
        svg: SVGServicevk,
    },
    {
        link: 'https://vk.com/@guidevk-publication',
        svg: SVGFeathering,
    },
]


export const Main = props => {
    const [otherCategory, setOtherCategory] = useState('tools');
    const [servicesInfo, setServicesInfo] = useState(null);

    const getInfoOtherService = (category, id) => {
        return SERVICES.other[category].find((service) => service.service_id === id);
    }
    const getOtherServicesByCategory = (category) => {
        let category_ids = SERVICES.other[category].map((service) => service.service_id)
        return servicesInfo.filter((service) => category_ids.includes(service.id))
    }
    return (
        <Panel id={props.id}>
            <PanelHeader>
                Каналы
            </PanelHeader>
            
            <Group>
                <HorizontalScroll>
                    <div style={{ display: "flex" }}>
                        {Cards.map(SCard => (
                            <a
                            key={SCard.link}
                            style={{margin: '0 5px'}}
                            target="_blank" rel="noopener noreferrer"
                            href={SCard.link}>
                                <SCard.svg
                                style={{borderRadius: 8}} />
                            </a>
                        ))}
                    </div>
                </HorizontalScroll>
            </Group>
            <Group>
                <Banner
                    before={<Icon24CheckCircleOutline style={{color: 'var(--accent)'}} />}
                    header="Публикация в каталоге"
                    subheader='Название и оформление канала или чата присваивается при
                    публикации. Если вы владелец и хотите обновить содержимое,
                    свяжитесь с нами'
                    actions={
                    <Button
                    target="_blank" rel="noopener noreferrer"
                    href='https://vk.me/guidevk'>
                        Написать сообщение
                    </Button>
                    }
                />
            </Group>
            <Group header={<Header>Каналы</Header>}>
                {CHANNELS.length > 0 ? CHANNELS.map(channel => (
                    <SimpleCell
                        target="_blank" rel="noopener noreferrer"
                        href={channel.link}
                        key={channel.title}
                        multiline
                        before={<Avatar mode='image' size={72} src={CHANNELS_IMG_URL + channel.avatar} alt='ava' />}
                        description={channel.caption}>
                            {channel.title}
                        </SimpleCell>)) : 
                        <Placeholder header="Находите интересное" icon={<Icon56AdvertisingOutline />}>
                            Здесь будут отображаться каналы от интересных авторов и крупных сообществ
                        </Placeholder>
                    }
            </Group>
            <Group header={<Header>Чаты</Header>}>
                {/* <Div>
                    <SegmentedControl
                    value={otherCategory}
                    onChange={e => setOtherCategory(e)}
                    options={[
                        {
                            label: 'Инструменты',
                            value: "tools",
                        },
                        {
                            label: 'Общение',
                            value: "communication",
                        },
                        {
                            label: 'Образование',
                            value: "education",
                        },
                    ]} />
                </Div> */}
                
                <Placeholder header="Находите общение" icon={<Icon56MessageOutline />}>
                    Здесь будут отображаться групповые чаты, в которые вы можете вступить и начать новое общение
                </Placeholder>
                
            </Group>
        </Panel>
    )
}