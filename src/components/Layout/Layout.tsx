import React from 'react'
import { FullPageContainer, PageContainer, SideMenuContainer } from './Layout.styles'

interface PropType {
  children: any;
} 
export const Layout = ({children}: PropType) => {
  return (
    <FullPageContainer>
      <SideMenuContainer/>
      <PageContainer>
      {children}
      </PageContainer>      
    </FullPageContainer>    
  )
}
