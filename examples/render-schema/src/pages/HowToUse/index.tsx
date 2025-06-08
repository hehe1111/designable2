import { FormProvider, createSchemaField } from '@formily/react'
import { createForm } from '@formily/core'
import * as components from '@formily/antd-v5'
// TODO: 以下会报错
// import * as components from '@pind/designable-formily-antd/src/components' // 如何使用这个库里的 CustomButtom 组件？@formily/antd-v5 里没有提供 Button 组件
import schema from './schema.json'

export default function HowToUse() {
  const form = createForm({
    initialValues: {
      name: 'Apple Banana',
      age: 18,
      address: '123 Main St',
    },
  })

  const SchemaField = createSchemaField({
    // @ts-ignore
    components,
  })

  const scope = {
    onClick: (e: MouseEvent) => {
      console.log('onClick', e, form.values)
    },
  }

  return (
    <FormProvider form={form}>
      {/* @ts-ignore */}
      <SchemaField schema={schema.schema} scope={scope} />
    </FormProvider>
  )
}
