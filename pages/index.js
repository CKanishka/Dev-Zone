import React from 'react';
import { connect } from 'react-redux';
import Head from 'next/head'
import HeadingBanner from '../components/HeadingBanner';
import CardsContainer from '../components/CardsContainer';
import AddButton from '../components/AddButton';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import {getItems} from "../redux/actions/itemActions";
class Index extends React.Component {
    componentDidMount(){
        this.props.getItems()
    }
    render(){
        return(
            <>
             <Head>
            <title>Dev Zone</title>
            <meta name="keywords" content="HTML5 Template" />
            <meta name="description" content="Dev Zone- A forum for developers by developers"/>
            <link rel="icon" href="/static/assets/images/logo_devzone.png" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js" async defer></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" async defer></script>
            </Head>
            <HeadingBanner />
            <CardsContainer />
            <AddButton />
            <Footer />
            </>
        )
    }  
}
export default connect(
    state => state,
    {getItems}
)(Index);