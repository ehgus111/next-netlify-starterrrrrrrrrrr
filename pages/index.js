import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="사장님의 사이트에 오신것을 환영합니다" />
    <img style="display: block;-webkit-user-select: none;margin: auto;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;" src="https://i9.ytimg.com/vi/N7C8sjSNUWA/mq2.jpg?sqp=CJTX1JoG&amp;rs=AOn4CLA_QjNAMWGUNBus2m0Utdd9Um4OXw">
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
