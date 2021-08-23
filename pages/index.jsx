import Head from 'next/head'
import Link from 'next/link'
import { Container, Card, Button } from 'react-bootstrap'

export default function Home() {
  const openCheckout  = () => { 
    Paddle.Checkout.open({ product: 12327 });
  }
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
          A simple <a href="https://nextjs.org">Next.js</a> Paddle app.
        </h1>
        <Container>

            <Card>
              <div className="card-body">
                <h3 className="card-title">Using the Overlay Checkout.{' '}</h3>
                <p className="card-text">Import Head from 'next/head' to add custom elements to the `head` of your page
                with the built-in Head component, and add Paddle JS to the head in a script tag. Using traditional HTML <code>script</code> tags
                in the <code>head</code> avoids a TypeError present when using <code>Script</code> from <code>next/script</code></p>
                <p className="card-text">Create a javascript file with your Paddle setup instructions (e.g. environment,
                vendor id, callbacks) in /public/js and link to this with a script tag in the page head.</p>
                <p className="card-text">Define a constant named openCheckout to use as with the onClick event, similar to
                the React implementation in the <Link href="https://developer.paddle.com/guides/how-tos/checkout/paddle-checkout#invoking-the-flexible-checkout">
                Paddle documentation</Link>.</p> 
                <p><code>const openCheckout  = () ={'>'} {'{'}<br></br>
                Paddle.Checkout.open({'{'} product: 12345 {'}'});<br></br>{'}'}</code></p>
                <p>Finally add a button with the onClick event set to openCheckout, such as the one below.</p>
                <Button variant="primary" onClick={openCheckout}>Buy Now!</Button>{' '}
              </div>
            </Card>
            <Card>
              <div className="card-body">
                <h3 className="card-title">Using the Inline Checkout.{' '}</h3>
                <p className="card-text">As with the Overlay Checkout, Import Head from 'next/head' to add custom elements to the 
                `head` of your page with the built-in Head component, and add Paddle JS to the head in a script tag.</p>
                <p className="card-text">Create a javascript file with your Paddle setup instructions (e.g. environment,
                vendor id, callbacks) in /public/js and link to this with a script tag in the page head.</p>
                <p className="card-text">Create a second javascript file to specify the parameters called with the <code>Paddle.Checkout.open()
                </code> method. You need to pass the parameter <code>method: 'inline'</code> to specify an inline checkout</p>
                <p className="card-text">Add the div/define the component that you wish to target for the inline checkout. Set the class 
                name to be <code>checkout-container</code>.</p>
                <p className="card-text">Finally, add a script tag pointing to the javascript file specifying the parameters for <code>Paddle.Checkout.open()
                </code>. This should be loaded after your checkout div/component.</p>
                <Button variant="primary" href="/inline">Go to page</Button>{' '}
              </div>
            </Card>

        </Container>
      </Container>

      <footer className="cntr-footer">
        This is where I'd put a footer if I had one.
      </footer>
    </Container>
  )
}
