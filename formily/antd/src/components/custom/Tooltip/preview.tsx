import React from 'react'
import { Tooltip, TooltipProps } from 'antd'
import { createBehavior, createResource } from '@pind/designable-core'
import { DnFC } from '@pind/designable-react'
import { createFieldSchema } from '../../Field'
import { AllSchemas } from '../../../schemas'
import { AllLocales } from '../../../locales'

import { connect, mapProps, mapReadPretty, ReactFC } from '@formily/react'

import { Select as FormilySelect } from '@formily/antd-v5'

// export const CustomTooltip: DnFC<React.ComponentProps<any>> = FormilySelect

// export const CustomTooltip: DnFC<React.ComponentProps<TooltipProps>> = Tooltip
export const CustomTooltip: DnFC<React.ComponentProps<any>> = connect(
  Tooltip,
  mapProps({ title: 'realTitle', children: 'children' }),
  mapReadPretty((value) => <div>CustomTooltip 2222 : {value || '-'}</div>)
)

CustomTooltip.Behavior = createBehavior({
  name: 'CustomTooltip',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'CustomTooltip',
  designerProps: {
    propsSchema: createFieldSchema(AllSchemas.CustomTooltip),
  },
  designerLocales: AllLocales.CustomTooltip,
})

CustomTooltip.Resource = createResource('Customs', {
  icon: 'ObjectSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        title: 'CustomTooltip',
        'x-decorator': 'FormItem',
        'x-component': 'CustomTooltip',
      },
    },
  ],
})
