export function updateGrid() {
    const app = document.querySelector('.app');

    if (app) {
        function updateGrid() {
            const fontSize = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('font-size'))
            const containerWidth = app.offsetWidth / fontSize;
            const tagMaxWidth = parseFloat(getComputedStyle(app).getPropertyValue('--tag-max-width'));
            const gapCategoriesTags = parseFloat(getComputedStyle(app).getPropertyValue('--gap-categories-tags'));
            const categoriesPadding = parseFloat(getComputedStyle(app).getPropertyValue('--categories-padding'));
            const categoriesBorder = parseFloat(getComputedStyle(app).getPropertyValue('--categories-border'));

            // Вычисляем значения в JavaScript
            const maxWidth = (tagMaxWidth * 2) + gapCategoriesTags + categoriesPadding + categoriesBorder;
            const maxWidthS = tagMaxWidth + gapCategoriesTags + categoriesPadding + categoriesBorder;
            let templateColumns = `repeat(${Math.floor(containerWidth / maxWidth)}, minmax(${maxWidth}rem, 1fr))`;
            // if(containerWidth % maxWidth >= (maxWidthS + 1)) {
            //     templateColumns = templateColumns + ` ${maxWidthS}rem`
            // }
            app.style.gridTemplateColumns = templateColumns
        }

        window.addEventListener('resize', updateGrid);
        updateGrid(); // Инициализация при загрузке

        return () => {
            window.removeEventListener('resize', updateGrid); // Очистка при размонтировании
        };
    } else {
        console.error('Элемент с классом .app не найден в DOM.');
    }
}
