import React from 'react';
import { connect } from 'react-redux';
import Head from 'next/head'
import HeadingBanner from '../components/HeadingBanner';
import CardsContainer from '../components/CardsContainer';
import AddButton from '../components/AddButton';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
const Home = (props) => {
    console.log(props.item)
    return(
        <>
         <Head>
        <title>Dev Zone</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
        </Head>
        <HeadingBanner />
        <CardsContainer />
        <AddButton />
        <Footer />
        </>
    )
}
export default connect(
    state => state
)(Home);