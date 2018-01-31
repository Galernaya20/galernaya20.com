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

export const Description = styled.p`
  height: 159px;
  overflow: hidden;
  padding: 0;
`

export const ContentLayout = Layout.extend`
  h4 {
    font-size: 27px;
    font-weight: 500;
    margin: 20px 0;
    padding: 0;
    color: #777;
  }

  hr {
    border-top: 1px solid #fafafa;
    margin: 35px 0;
  }

  hr: first-of-type {
    display: none;
  }

  img {
    display: block;
    margin: 20px auto;
  }

  strong {
    font-size: 18px;
    font-weight: 300;
  }
`
