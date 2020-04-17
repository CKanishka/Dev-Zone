import Head from 'next/head';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';
export default function Login() {
  return (
    <div className="container">
      <Head>
        <title>Dev Zone</title>
        <meta name="keywords" content="HTML5 Template" />
        <meta name="description" content="Dev Zone- A forum for developers by developers"/>
        <link rel="icon" href="/static/assets/images/logo_devzone.png" />
        {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script> */}
      </Head>

      <main>
       <LoginForm />
      </main>

      <Footer />
    </div>
  )
}
