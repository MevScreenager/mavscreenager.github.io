import React from 'react';
import Categories from './components/Categories';
import { baseTags } from './infoTags/baseTags';
import { linkTags } from './infoTags/linkTags';
import { formatTags } from './infoTags/formatTags';
import { semanticTags } from './infoTags/semanticTags';
import { imageTags } from './infoTags/imageTags';
import { formTags } from './infoTags/formTags';

function App() {
  // useEffect(() => {
  //   updateGrid();
  // }, []); 

  

  return (
    <div className="app">
      <div className='app__column'>
        <Categories name='Базовый HTML-код' tagProps={baseTags}/>
        <Categories name='Ссылки' tagProps={linkTags}/>
        <Categories name='Форматирование' tagProps={formatTags}/>
      </div>
      <div className='app__column'>
        <Categories name='Семантика' tagProps={semanticTags}/>
        <Categories name='Картинки' tagProps={imageTags}/>
        <Categories name='Формы и ввод' tagProps={formTags}/>
      </div>
      <div className='app__nav'>
        <ol>
          <li>
            <a href='#baseTags'>Базовый HTML</a>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default App;
