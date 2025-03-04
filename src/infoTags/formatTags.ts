import { ITag } from "../interface/intesface";
import { Address, B, Bdi, Bdo, Blockquote, BlockquoteCode, Br, Code, Hr, I, Pre, Q, QCode, S, Small, U, Wbr } from "./examples/formattingTagExamples";

const formaTagsColumn1: ITag[] = [
    {
        name: 'address',
        about: 'Контактные данные автора',
        example: [Address]
    },
    {
        name: 'blockquote',
        about: 'Вставка цитаты',
        example: [Blockquote, BlockquoteCode]
    },
    {
        name: 'q',
        about: 'Цитата внутри абзаца',
        example: [Q, QCode]
    },
    {
        name: 'br',
        example: [Br]
    },
    {
        name: 'pre',
        about: 'Отображает текст без обработки',
        example: [Pre]
    },
    {
        name: 'code',
        about: 'Вывод кода',
        example: [Code]
    }
]

const formaTagsColumn2: ITag[] = [
    {
        name: 'wbr',
        example: [Wbr]
    },
    {
        name: 'hr',
        about: 'Черта',
        example: [Hr]
    },
    {
        name: 'b',
        example: [B]
    },
    {
        name: 'i',
        example: [I]
    },
    {
        name: 's',
        example: [S]
    },
    {
        name: 'u',
        about: 'Стилистическое выделение слова, например ошибка',
        example: [U]
    },
    {
        name: 'bdo',
        example: [Bdo]
    },
    {
        name: 'bdi',
        about: ['Изолирует текст','Работа с языками другого направления'],
        example: [Bdi]
    },
    {
        name: 'small',
        about: ['Выводит текст с меньшим размером'],
        example: [Small]
    }
]

export const formatTags: ITag[][] = [formaTagsColumn1, formaTagsColumn2]