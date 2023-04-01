import React from 'react';
import './Default.scss';
import Header from "../common/Header"
import Content from "../common/Content"
import Footer from "../common/Footer"


const Default: React.FC<{children?: React.ReactNode}> = (props = {}) => {
  const { children } = props;
  return (
    <div id="App">
      <div className="direct-link">
        <a href="#mainContent">본문 바로가기</a>
      </div>

      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </div>
  )
}

export default Default;
