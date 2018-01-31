// @flow

import React from 'react'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import styled from 'styled-components'

const Self = styled.div`
  .react-tabs__tab-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    border-bottom: 1px solid #f1f1f1;
  }
  .react-tabs__tab {
    cursor: pointer;
    display: inline-block;
    padding: 10px;
  }
  .react-tabs__tab--selected {
    background-color: #f1f1f1;
  }
`
export type PropsT = {
  tabs: Array<{title: string, content: {content: string}}>,
}

export const TabsComponent = ({tabs}: PropsT) => {
  const tabItems = tabs.map((item, index) => <Tab key={index}>{item.title}</Tab>)
  const contentItems = tabs.map((item, index) => (
    <TabPanel key={index}>
      <div
        dangerouslySetInnerHTML={{
          __html: item.content.content,
        }}
      />
    </TabPanel>
  ))
  return (
    <Self>
      <Tabs>
        <TabList>{tabItems}</TabList>
        {contentItems}
      </Tabs>
    </Self>
  )
}
