import Head from 'next/head'
import Script from 'next/script'
import { Container } from 'react-bootstrap'

export default function Inline() {  
  return (
    <Container className="md-container">
      <Head>
        <title>Paddle App</title>
        <link rel="icon" href="/favicon-32x32.png" />
        <script type="text/javascript" src="https://cdn.paddle.com/paddle/paddle.js"></script>
        <script type="text/javascript" src="/js/paddle-setup.js"></script>
      </Head>
      <Container>
        <h1>
          Paddle inline checkout
        </h1>
        <Container>
          <div className="checkout-container"></div>
        </Container>
      </Container>
      <Script
        src="/js/paddle-inline.js"
        strategy="beforeInteractive"
      />
      <footer className="cntr-footer">
        This is where I'd put a footer if I had one.
      </footer>
    </Container>
  )
}
