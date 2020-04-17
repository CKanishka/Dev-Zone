import Head from 'next/head';
import BlogDetails from '../components/BlogDetails';
import HeadingBanner from '../components/HeadingBanner';
import Footer from '../components/Footer';


class Blog extends React.Component {
    static getInitialProps({query}) {
        return {query}
    }
    render(){
        console.log(this.props.query)
        return (
            <>
              <Head>
                  <title>Dev Zone</title>
                  <meta name="keywords" content="HTML5 Template" />
                  <meta name="description" content="Dev Zone- A forum for developers by developers"/>
                  <link rel="icon" href="/static/assets/images/logo_devzone.png" />
                  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js" async defer></script>
                  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" async defer></script>
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
              </Head>
              <div className="banner">
                  <h1 className="text-center">Blog Details</h1>
              </div>
              <BlogDetails id={this.props.query.id}/>
              <Footer />
         </>
        )
    }
  
}

export default Blog;