import { ITag } from "../interface/intesface";
import { Abbr, Data, Del, Em, Footer, Kbd, Mark, Nav, Output, Samp, Sub, Sup, Time, Var } from "./examples/semanticTagExamples";

const semanticTagsColumn1: ITag[] = [
    {
        name: 'div',
        about: 'Универсальный контейнер'
    },
    {
        name: 'span',
        about: 'Выделение стилем части текста'
    },
    {
        name: 'header',
        about: 'Отделения вводного содержимого от основного содержимого страницы или секционного блока.'
    },
    {
        name: 'footer',
        about: 'Подвал страницы или блока',
        example: [Footer]
    },
    {
        name: 'main',
        about: ['Блок с главным контентом страницы', 'Тоже самое что div, но важнее для поисковиков']
    },
    {
        name: 'section',
        about: ['Большой логический блок сайта', 'Обязателен заголовок <h1>...<h6>']
    },
    {
        name: 'article',
        about: ['Самостоятельная сущьность', 'Например: товар, рекламный баннер, виджет']
    },
    {
        name: 'aside',
        about: ['Дополнительный контент', 'Часто используется для боковой колонки на сайте']
    },
    {
        name: 'em',
        about: ['Добавляет тексту внутри смысловой акцент'],
        example: [Em]
    },
    {
        name: 'cite',
        about: ['Источник цитаты или произведения']
    },
    {
        name: 'var',
        about: ['Семантически выделяет математические выражения и переменные'],
        example: [Var]
    },
    {
        name: 'dfn',
        about: ['Выделение терминов', 'Не обязателно сокращенные', 'В атрибут title записывают значение']
    },
    {
        name: 'samp',
        about: ['Вывод программы'],
        example: [Samp]
    },
]
const semanticTagsColumn2: ITag[] = [
    {
        name: 'nav',
        about: 'Контенер для ссылок ',
        example: [Nav]
    },
    {
        name: 'search',
        about: 'Обертка секции с поиском или фильтром'
    },
    {
        name: 'time',
        about: 'Разметка даты и времени',
        example: [Time]
    },
    {
        name: 'data',
        about: 'Перевод с человеческого языка на компьютерный',
        example: [Data]
    },
    {
        name: 'sud',
        about: 'Подстрочный текст',
        example: [Sub]
    },
    {
        name: 'sup',
        about: 'Надстрочный текст',
        example: [Sup]
    },
    {
        name: 'del',
        about: ['Удаленный контент', 'Используется вместе с <ins> в кодовых базах для отображения изменений в коде'],
        example: [Del]
    },
    {
        name: 'ins',
        about: 'Добавленный контент'
    },
    {
        name: 'kbd',
        about: 'Визуальное выделение элементов, связанных с клавиатурным вводом',
        example: [Kbd]
    },
    {
        name: 'mark',
        example: [Mark]
    },
    {
        name: 'output',
        about: ['Выводить результаты вычислений или действий пользователя'],
        example: [Output]
    },
    {
        name: 'abbr',
        about: ['Аббревиатура', 'В атрибут title записывают расшифровку'],
        example: [Abbr]
    },
    {
        name: 'strong',
        about: 'Семантически выделяет важный текст'
    },
]

export const semanticTags: ITag[][] = [semanticTagsColumn1, semanticTagsColumn2]