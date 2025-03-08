import { ITag } from "../interface/intesface";
import { Form } from "./examples/formTagExample";

const formTagsColumn1: ITag[] = [
      {
            name: 'form',
            about: 'Форма',
            example: [Form]
      }
]

const formTagsColumn2: ITag[] = []

export const formTags:ITag[][] = [formTagsColumn1, formTagsColumn2]