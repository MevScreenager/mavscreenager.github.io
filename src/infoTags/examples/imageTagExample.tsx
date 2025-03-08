const image2 = require('../media/image/2.jpg')
const image6 = require('../media/image/6.jpg')
const image7 = require('../media/image/7.jpg')
const image8 = require('../media/image/8.jpg')

export const Img = <div>
      <figure>
            <img src={image2}
                  about='image1' 
                  id="image-revirse" 
                  alt="All for the game"/>
            <p className="text-button-img align-center"><small>Нажмите на изображение</small></p>
      </figure>
</div>

export const FigureAbout = <div>
      <p style={{color: 'var(--tag-about-color)'}}>
            <b style={{color: 'var(--code-tag-color)'}}>figure</b> - самостоятельный блок с изображением
      </p>
</div>

export const FigcaptionAbout = <div>
      <p style={{color: 'var(--tag-about-color)'}}>
            <b style={{color: 'var(--code-tag-color)'}}>figcaption</b> - заголовок к изображению
      </p>
</div>

export const FigureFigcaption = <div>
      <figure>
            <img src={image6} alt='The Foxhole Court'/>
            <figcaption>
                  <p className="text-button-img align-center">
                        <small>рис. 1 - The Foxhole Court</small>
                  </p>
            </figcaption>
      </figure>
</div>

export const PictureAbout = <div>
      <p style={{color: 'var(--tag-about-color)'}}>
            <b style={{color: 'var(--code-tag-color)'}}>picture</b> - адаптирует картинки под разные устройства и поддерживаемые форматы
      </p>
</div>

export const SourceAbout = <div>
      <p style={{color: 'var(--tag-about-color)'}}>
            <b style={{color: 'var(--code-tag-color)'}}>source</b> - указывает на разные форматы медиа
      </p>
</div>

export const PictureSource = <div>
      <picture>
            <source media="(min-width: 700px)" srcSet={image7}></source>
            <img src={image8}/>
            <p className="text-button-img align-center"><small>Изображение меняется в зависимости от ширины окна</small></p>
      </picture>
</div>

export const SvgSprat = <div>
      <p style={{color: 'var(--tag-about-color)'}}>
            <b style={{color: 'var(--code-tag-color)'}}>SVG-спрайт</b> 
            — это файл, получаемый в результате объединения нескольких файлов SVG
      </p>
</div>

export const Svg = <div className="dots">
      <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 4 24 15"
            className="dots-icon"
      >
      <path
            d="M16 12a3.001 3.001 0 016 0 3.001 3.001 0 01-6 0zm1 0a2 2 0
                  114.001.001A2 2 0 0117 12zm-8 0a3.001 3.001 0 016 0 3.001 3.001 0
                  01-6 0zm1 0a2 2 0 114.001.001A2 2 0 0110 12zm-8 0a3.001 3.001 0 016
                  0 3.001 3.001 0 01-6 0zm1 0a2 2 0 114.001.001A2 2 0 013 12z"
      />
      </svg>
</div>
