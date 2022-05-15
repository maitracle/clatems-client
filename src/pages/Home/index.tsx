import React from 'react'
import PageWrapper from 'components/layouts/PageWrapper'
import {fetchArtworkList} from 'store/Artwork/actions'
import ArtworkList from 'modules/ArtworkList'
import Gnb from 'components/layouts/Gnb'
import ChatRoom from "../ChatRoom";


const Home = () => {
    return (
        <PageWrapper>
            <Gnb isMainPage title={{isLogo: true, text: ''}}/>

            <ChatRoom/>
            <ArtworkList fetchAction={fetchArtworkList}/>
        </PageWrapper>
    )
}

export default Home
