import styled from 'styled-components'

import ErrorImg from './image/err.png'

export const Box = styled.div`
  padding: 170px 0 0;
  margin: 150px auto;

  font-size: 16px;

  background: url(${ErrorImg}) no-repeat top center;
  background-size: 182px 138px;

  p {
    margin: 0;
    line-height: 24px;
    text-align: center;
  }

  div {
    width: 126px;
    height: 40px;
    margin: 28px auto 0;

    font-size: 16px;
    line-height: 40px;
    color: #fff;
    text-align: center;
    cursor: pointer;

    background: #0cc;
    border-radius: 2px;
  }

  span {
    padding: 0 4px 0 0;
    color: #0cc;
  }
`

export const TemTip = styled.div`
  padding: 80px 0 0;

  font-size: 12px;
  line-height: 18px;
  color: #909fba;
`
