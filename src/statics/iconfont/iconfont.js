import { createGlobalStyle } from 'styled-components';

export const GlobalstyleFont = createGlobalStyle`
@font-face {
  font-family: "iconfont";
  src: url('./iconfont.eot?t=1567006327091'); /* IE9 */
  src: url('./iconfont.eot?t=1567006327091#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1567006327091') format('woff'),
  url('./iconfont.ttf?t=1567006327091') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1567006327091#iconfont') format('svg'); /* iOS 4.1- */
}


  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-fangdajing:before {
    content: "\e617";
  }

  .icon-31:before {
    content: "\e6b2";
  }

  .icon-shoucang:before {
    content: "\e633";
  }

  .icon-luopancompass83:before {
    content: "\e94f";
  }

  .icon-pinglun:before {
    content: "\e63a";
  }

  .icon-jiahao:before {
    content: "\e635";
  }

  .icon-zuanshi:before {
    content: "\e728";
  }

  .icon-pinglun1:before {
    content: "\e60c";
  }

  .icon-maobi:before {
    content: "\e6a4";
  }

  .icon-xiazai:before {
    content: "\e61a";
  }

  .icon-aixin:before {
    content: "\e619";
  }

`;


