//@flow
import styled from 'styled-components'
export const Layout = styled.div`
  padding: 0px 18%;
  padding-top: 35px;
  padding-bottom: 35px;
  @media screen and (max-width: 992px) {
    padding: 0px 20px;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    padding-bottom: 14px;
  }
`

export const BlockLayout = Layout.extend`
  min-height: 512px;
`
