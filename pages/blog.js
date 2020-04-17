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
                  <link rel="icon" href="/favicon.ico" />
                  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
                  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
              </Head>
              <div className="banner">
                  <h1 className="text-center">Blog Details</h1>
              </div>
              <BlogDetails likeCount={21}/>
              <Footer />
         </>
        )
    }
  
}

export default Blog;