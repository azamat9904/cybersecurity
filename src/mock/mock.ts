import { ITag } from "../types/interfaces";


export const tags: ITag[] = [{ id: "1", text: 'курсы', url: 'url' }, { id: "2", text: "статьи", url: 'url' }];

export const attacks: ITag[] = [
    {
        id: '1',
        text: "DoS атака",
        url: '/dos-attack'
    },
    {
        id: '2',
        text: "Фишинг атака",
        url: '/fishing'
    },
    {
        id: '3',
        text: "Вирусы",
        url: '/viruses'
    },
    {
        id: '4',
        text: "Сетевая разведка",
        url: '/network-attack'
    },
    {
        id: '5',
        text: "Сниффинг пакетов",
        url: '/sniffing-packages'
    },
    {
        id: '6',
        text: "SQL иньекция",
        url: '/sql-inection'
    },
    {
        id: '7',
        text: "IP-спуфинг",
        url: '/ip-spuffing'
    }
]