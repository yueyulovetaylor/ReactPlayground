import { createGlobalStyle } from 'styled-components';

export const IconfontGlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1557694191329'); /* IE9 */
    src: url('./iconfont.eot?t=1557694191329#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPEAAsAAAAAB9wAAAN1AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDFAqDKIMAATYCJAMQCwoABCAFhG0HPhvgBsgOJSHBwABgAMBEBPVjr3vvXQBQIXoeH4UqrCIc1lY1TtSzERGqaMT/v7zqp2uYjFErjeigkkn7VdfaV9En67Rvbkv//OX0RonPB5TLmoP6pw0MMA4ooLEXyAEXSGDeML3Egfi0mUC7aWNxRyVVTeAmeb0C8aBrIrjVzHKEGlqF5p6JGfEGzlrLR8NNAJ/S78d/SAg3iqbKG3h8X6xA3i9uIBXN+v9BV4yBZD8n2DQqVoAkLnvdF1CeXoG0m9ZO1oBmKZS9gv//kxIpYqttvukfr6hEMw/tBDswU/nFhSqpJgUaFahJhYgKL2NCK9rwCHwGTz+5D11TGXH2bG0dEoI8prZcWJKl7Ipom7U+cLcg3Jwco10csiWH9XVqpLVJbV25NLB5+fLAZQHe/IlHE28S2jtWRPHrQtrEs8JSgPZo/8ovuc3Nbm2dnT4pq/nYLpi1W1h6leMeWy4+4R4/bnn4sOnRo+alT3Kbly/dO5s+edJaFXYc8Phx9if5+48CueDl82WNWZ1Bz1+fHe3VnjWsQi+QCLA9VdqTldXZ3TkoavrcvOKYpnl5E0N2fvuRWIGCJsAltfTeyKJ7xOu/VPjYmFPbbCiQ9JwnTr9zHOx6WiznvB9jG9Wie3YLlXkZb3pa2Y3QwN9hwz4Oi4L0t6ATJ6yjWQFaffPm6kiBoAWtLgMFbPRAf6M9kc2Rf3YapmzdOgUrDNiFpiAsTASwOdgBGh/SqX5I2Y16CUH2HW1DUf/vN36emePR65311U1I8P5v53soW5enVWG25G8VpDNkcpmXysSIOJXOj0gblb4K2rWjAf39Xu+hHTIoodVQCUWLKahazeDJXIEmHXagWatdaLesdHqHARQS2YYl8wGEXgeh6PYFql638GS+gibD3kKz3kDQ7iT8F+wwFzpfSInIiIKlyViXbVY1sDE+ozYQbbxZpFVZymoh1KHHcHxMXDNXSqyE7jHEMUFLYEzFKrVZcAnYjpjNNmynNiORWUw/Y/aM2Fi1700xss0CvEMUIWIIBSaZDNPJbKzUuDrDtz7fgNCMZyaiI2UNfwuCctDrx+LFiJuBl6qts8re5RqHCTQJGEaFqSgbC6wEOAmzn7bB7P3tjAgZE6N/RdIuQyyqpM5Vx5yvtTzhGmjnLZ5RokZGk3KtG/JFXhWtmiIa9dgEAAAAAA==') format('woff2'),
    url('./iconfont.woff?t=1557694191329') format('woff'),
    url('./iconfont.ttf?t=1557694191329') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1557694191329#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`