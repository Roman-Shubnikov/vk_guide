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
    CellButton,
    Avatar,
    SimpleCell,
    PanelSpinner,
} from '@vkontakte/vkui';
import { SVGFeathering, SVGMiniapps, SVGServicevk } from '../../../svg';
import {
    Icon56ServicesOutline,
    Icon28GridLayoutOutline,
} from '@vkontakte/icons';
import { SERVICES } from '../../../config';
import { useUser } from '../../../hooks';

const Cards = [
    {
        link: 'https://vk.com/@guidevk-miniapps',
        svg: SVGMiniapps,
    },
    {
        link: 'https://vk.com/@guidevk-servicevk',
        svg: SVGServicevk,
    },
    {
        link: 'https://vk.com/@guidevk-feathering',
        svg: SVGFeathering,
    },
]


export const Main = props => {
    const { userToken } = useUser();
    const [otherCategory, setOtherCategory] = useState('tools');
    const services_vk = SERVICES.vk.map((service) => service.service_id).flat();
    const services_other = Object.keys(SERVICES.other).map((category, i) => (SERVICES.other[category].map((service) => service.service_id))).flat();
    const [servicesInfo, setServicesInfo] = useState(null);

    const getInfoVkService = (id) => {
        return SERVICES.vk.find((service) => service.service_id === id);
    }
    const getInfoOtherService = (category, id) => {
        return SERVICES.other[category].find((service) => service.service_id === id);
    }
    const getVkServices = () => {
        return servicesInfo.filter((service) => services_vk.includes(service.id))
    }
    const getOtherServicesByCategory = (category) => {
        let category_ids = SERVICES.other[category].map((service) => service.service_id)
        return servicesInfo.filter((service) => category_ids.includes(service.id))
    }
    useEffect(() => {
        let service_ids = services_vk.concat(services_other);
        bridge.send("VKWebAppCallAPIMethod",
        { 
            method: 'apps.get',
            params: {
                app_ids: service_ids.join(','),
                access_token: userToken,
                v: '5.131',
            },
            
        })
        .then((data) => {
            setServicesInfo(data.response.items);
            console.log(data.response.items)
        })
        .catch((e) => console.log(e))
        
    }, [userToken]);
    return (
        <Panel id={props.id}>
            <PanelHeader>
                Сервисы
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
            <Group header={<Header>От ВКонтакте</Header>}>
                {servicesInfo ? getVkServices().length > 0 ? getVkServices().map((service) => (
                    <SimpleCell
                    onClick={() => bridge.send("VKWebAppOpenApp", {"app_id": service.id})}
                    key={service.id}
                    multiline
                    before={<Avatar mode='image' size={72} src={service.icon_139} alt='ava' />}
                    description={getInfoVkService(service.id).description}>
                        {service.title}
                    </SimpleCell>
                )): 
                <Placeholder header="Сервисов пока нет" icon={<Icon56ServicesOutline />}>
                    Здесь будут отображаться сервисы, которые могут понравиться пользователям
                </Placeholder> : <PanelSpinner height={252} />}
                
                <CellButton
                multiline
                target="_blank" rel="noopener noreferrer"
                href='https://vk.com/services'
                before={<Avatar mode='image' size={72}><Icon28GridLayoutOutline /></Avatar>}>
                    Перейти в каталог мини-приложений
                </CellButton>
            </Group>
            <Group header={<Header>От сторонних разработчиков</Header>}>
                <Div>
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
                </Div>
                {servicesInfo ? getOtherServicesByCategory(otherCategory).length > 0 ? getOtherServicesByCategory(otherCategory).map((service) => (
                    <SimpleCell
                    onClick={() => bridge.send("VKWebAppOpenApp", {"app_id": service.id})}
                    key={service.id}
                    multiline
                    before={<Avatar src={service.icon_139} alt='ava' />}
                    description={getInfoOtherService(otherCategory, service.id).description}>
                        {service.title}
                    </SimpleCell>
                )): 
                <Placeholder header="Сервисов пока нет" icon={<Icon56ServicesOutline />}>
                    Здесь будут отображаться сервисы, которые могут понравиться пользователям
                </Placeholder>: <PanelSpinner />}
                
            </Group>
        </Panel>
    )
}