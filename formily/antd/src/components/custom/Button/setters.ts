import { ISchema } from '@formily/react'

export const CustomButton: ISchema = {
  type: 'object',
  properties: {
    // TODO: ...
    type: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: 'default',
      },
      enum: ['primary', 'dashed', 'link', 'text', 'default'],
    },
    onClick: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'ValueInput',
      'x-component-props': {
        include: ['EXPRESSION'],
      },
    },
    children: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        placeholder: '必填',
      },
    },
  },
}
