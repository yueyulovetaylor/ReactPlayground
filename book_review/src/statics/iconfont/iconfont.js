import { createGlobalStyle } from 'styled-components';

export const IconfontGlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1558897044813'); /* IE9 */
    src: url('./iconfont.eot?t=1558897044813#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAQQAAsAAAAACHAAAAPBAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDKgqEGINgATYCJAMUCwwABCAFhG0HRRthBxEVnG/Jfhw4Z9N56Coxd4ZeQSfpnvOh98o3yDadHJQtrKNRml9Ctv6CEJ54b/+222AWeka9LFBsaW1YOiKhLBHfIg3v2k+2k/f9MAMup01LYJ695TLmpDmpbQUYBxTQWEMDedAKJFFvGLvyIs4DAQjt0Rfk9vQPh4wzphEAeXOyUiCnLHhNKSEjDCVrS8hcSOQxjV4BMMf/PvkxmMgAJU0Yc4MzPdLh/Jy8DGFj9bHiXQqk47kAsE0AA/QFwIE8pZ50sDDeF4xQsrmRAGRzFIXn5PmIlyG6jhjDZXsR1/7lCQDFcATIhqExg0znBIfnxCaAwvPhBDB4PoIADi9DZPdxlgQABEABrALwHpjVFtLzfpZe1i0kc1lWFaNZVfipu7hzJ5yERxCTKWqcFhmZzBl7NyTqtCaSCnWRp6fbp29tGz12lbpNUdKO9Mk602W9Y3lyXFZGVHhm1JIZasSiRepCO0sRaRYu8pSY2MXtxcqW0SknlBmAiDgrpl8j46KixvkH2Ucc3Iqx25QZFwipizxjIpoWOdXAu3cjZpicIhbN2DGudD5RUlRwgKb9ORkT83hAmQudcvDgFOrcZLzlfIr//ctPxbmt+zM+1aq32h8On9N+/HRNc330YGGYfZzxwZMTvS1i7Lv5qnsMAYa080q0t49LiOvUvmGCs4dLUmfnqpZbvv8c4suMlTib6XWzp/vNDAs99ajlOgZFUNfUHEcT/+NYVn5p5AAiufQv6hWZY56g+DmPfpoYVX65lfqndbdP3dpj1Fzj4cOFvctd2bIrV5Y5SgatbFkcdC3v/by83/Z2Ee3+bqG1GzbUYiXFblbLsMgTwsEYCQDQx5azsT5HZ2cZkvfYRtb+1/8Guz6FrkuytP8mKxwAcN+aLoTyftL/J20t/dE1XAIAXi43rFJlNWrlcRkIQDKQTgMFCALwg9OADZ6MY1BfX5KQqTGoZtqBkXWlcmZfSBRDYSBzgtAHXpsVtigFQ9ocQG9MAiCssAeUhTNgrHCVypmPITHiHQysCINgeGWz59o2OerIqAUdmD9E23dk2UUFpTf070ZzUu6zX8hTDEGZFdnUFTvkMRZMH1+JEBD3LVzAZdg0PQzcJ7SSBZFhl+dU9qLM9u1MOWJIE8gBxh+IrF6H3M5C5T5/g7y3hsY1TRXBF8QmsXdQyhQtqFdN16rpWgZPPryKEIQnEdZrgQt0ocaM98BQPipBlsiEHtHBTo7aUVtNNr+ufcZdcBh3r4zMNCvb6htitzBxsdeKdOedTtE1z2YAAAA=') format('woff2'),
    url('./iconfont.woff?t=1558897044813') format('woff'),
    url('./iconfont.ttf?t=1558897044813') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1558897044813#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`