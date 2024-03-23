import React, { useEffect } from 'react'
import { Space, Button, Radio } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
import { useDesigner, TextWidget } from '@pind/designable-react'
import { GlobalRegistry, SUPPORT_LOCALES } from '@pind/designable-core'
import { observer } from '@formily/react'
import { loadInitialSchema, saveSchema } from '../service'

export const ActionsWidget = observer(() => {
  const designer = useDesigner()
  useEffect(() => {
    loadInitialSchema(designer)
  }, [])
  const supportLocales = Object.values(SUPPORT_LOCALES)
  useEffect(() => {
    if (!supportLocales.includes(GlobalRegistry.getDesignerLanguage())) {
      GlobalRegistry.setDesignerLanguage(SUPPORT_LOCALES.ZH_CN)
    }
  }, [])
  return (
    <Space style={{ marginRight: 10 }}>
      <Button href="https://designable-fusion.formilyjs.org">
        Alibaba Fusion
      </Button>
      <Radio.Group
        value={GlobalRegistry.getDesignerLanguage()}
        optionType="button"
        options={[
          { label: 'English', value: SUPPORT_LOCALES.EN_US },
          { label: '简体中文', value: SUPPORT_LOCALES.ZH_CN },
        ]}
        onChange={(e) => {
          GlobalRegistry.setDesignerLanguage(e.target.value)
        }}
      />
      <Button href="https://github.com/pindjs/designable" target="_blank">
        <GithubOutlined />
        Github
      </Button>
      <Button
        onClick={() => {
          saveSchema(designer)
        }}
      >
        <TextWidget>Save</TextWidget>
      </Button>
      <Button
        type="primary"
        onClick={() => {
          saveSchema(designer)
        }}
      >
        <TextWidget>Publish</TextWidget>
      </Button>
    </Space>
  )
})
