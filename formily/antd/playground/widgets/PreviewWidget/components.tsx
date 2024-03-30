// $$: 预览用。本文件会被 formily/antd/playground/main.tsx 使用
// ! $$: 自定义组件必须在这里导出一份，否则预览时，会因为找不到组件，导致无法正常预览

import React from 'react'
export {
  Form,
  FormItem,
  DatePicker,
  Checkbox,
  Cascader,
  Editable,
  Input,
  NumberPicker,
  Switch,
  Password,
  PreviewText,
  Radio,
  Reset,
  Select,
  Space,
  Submit,
  TimePicker,
  Transfer,
  TreeSelect,
  Upload,
  FormGrid,
  FormLayout,
  FormTab,
  FormCollapse,
  ArrayTable,
  ArrayCards,
} from '@formily/antd-v5'
export { Card, Slider, Rate } from 'antd'
export { CustomTooltip } from '../../../src/components/custom/Tooltip'

export const Text: React.FC<{
  value?: string
  content?: string
  mode?: 'normal' | 'h1' | 'h2' | 'h3' | 'p'
}> = ({ value, mode, content, ...props }) => {
  const tagName = mode === 'normal' || !mode ? 'div' : mode
  return React.createElement(tagName, props, value || content)
}
