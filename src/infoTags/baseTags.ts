import { ITag } from "../interface/intesface";
import { H, P, Title } from "./examples/baseTagExamples";

const baseTagsColumn1: ITag[] = [
    {
        name: '!DOCTYPE',
        about: ['Определяет версию HTML. Указывается в первой строчке'],
      },
      {
        name: 'title',
        about: ['Заголовок документа (название на вкладке)'],
        example: [Title],
      },
      {
        name: 'h1>...<h6',
        about: ['Заголовки на странице'],
        example: [H],
      },
]

const baseTagsColumn2: ITag[] = [
      {
        name: 'html',
        about: ['Код страници'],
      },
      {
        name: 'head',
        about: ['Сведенья о документе.', 'Не визуализируются на странице'],
      },
      {
        name: 'body',
        about: ['Тело документа, всё, что есть на странице'],
      },
      {
        name: 'p',
        example: [P],
      },
      {
        name: '!--...--',
        about: ['Комментарий'],
      },
]

export const baseTags: ITag[][] = [baseTagsColumn1, baseTagsColumn2]