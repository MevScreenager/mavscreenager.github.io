import { ITag } from "../interface/intesface";
import { FigcaptionAbout, FigureAbout, FigureFigcaption, Img, PictureAbout, PictureSource, SourceAbout, Svg, SvgSprat } from "./examples/imageTagExample";

const imageTagsColumn1: ITag[] = [
      {
            name: 'img',
            about: 'Изображение',
            example: [Img]
      },
      {
            name: 'figure><figcaption',
            example: [FigureAbout, FigcaptionAbout, FigureFigcaption]
      },
      
]
const imageTagsColumn2: ITag[] = [
      {
            name: 'picture><source',
            example: [PictureAbout, SourceAbout, PictureSource]
      },
      {
            name: 'svg',
            about: 'Векторная графика',
            example: [SvgSprat, Svg]
      }
]

export const imageTags: ITag[][] = [imageTagsColumn1, imageTagsColumn2]