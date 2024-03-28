import { ISchema } from '@formily/react'

export const CustomTooltip: ISchema = {
  type: 'object',
  properties: {
    realTitle: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input.TextArea',
      'x-component-props': {
        autoSize: true,
      },
    },
    children: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input.TextArea',
      'x-component-props': {
        autoSize: true,
      },
    },
  },
}
