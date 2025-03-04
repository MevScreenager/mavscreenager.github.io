import { ITag } from "../interface/intesface";
import { A, Area, Link, Map } from "./examples/linkTagExamples";

const linkTagsColumn1: ITag[] = [
    {
        name: 'link',
        about: 'Подключение внешних ресурсов',
        example: [Link],
    },
    {
        name: 'a',
        about: 'Гиперсылка, связь одной страници с другой',
        example: [A],
    }
]

const linkTagsColumn2: ITag[] = [
    {
        name: 'map><area',
        about: ['map это контейнед для area', 'area накладывает область-ссылку на изображение'],
        example: [Area, Map]
    },
]

export const linkTags: ITag[][] = [linkTagsColumn1, linkTagsColumn2]