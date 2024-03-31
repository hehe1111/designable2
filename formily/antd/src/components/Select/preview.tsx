import React from 'react'
import { Select as FormilySelect } from '@formily/antd-v5'
import { createBehavior, createResource } from '@pind/designable-core'
import { DnFC } from '@pind/designable-react'
import { createFieldSchema } from '../Field'
import { Select as Setters } from './setters'
import { Select as Locales } from './setters-locales'

export const Select: DnFC<React.ComponentProps<typeof FormilySelect>> =
  FormilySelect

Select.Behavior = createBehavior({
  name: 'Select',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'Select',
  designerProps: {
    propsSchema: createFieldSchema(Setters),
  },
  designerLocales: Locales,
})

Select.Resource = createResource('Inputs', {
  icon: 'SelectSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        title: 'Select',
        'x-decorator': 'FormItem',
        'x-component': 'Select',
      },
    },
  ],
})
