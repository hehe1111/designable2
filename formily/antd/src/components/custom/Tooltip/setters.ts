import { ISchema } from '@formily/react'

export const CustomTooltip: ISchema = {
  type: 'object',
  properties: {
    title: {
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
    // TODO: align
    // arrow
    // autoAdjustOverflow
    color: {
      type: 'string',
      'x-decorator': 'FormItem',
      // 'x-component': 'Input.TextArea',
      // ! BackgroundStyleSetter、ColorInput 参考文件：
      // formily/antd/src/schemas/CSSStyle.ts
      // packages/react-settings-form/src/SchemaField.tsx
      // 'x-component': 'BackgroundStyleSetter',
      'x-component': 'ColorInput',
    },
  },
}
