import Head from 'next/head'
import LoginForm from '../components/LoginForm'
import Footer from '../components/Footer';
export default function Index() {
  return (
    <div className="container">
      <Head>
        <title>Dev Zone</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
      </Head>

      <main>
       <LoginForm />
      </main>

      <Footer />
    </div>
  )
}
