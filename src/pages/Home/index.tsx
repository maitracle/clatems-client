import React from 'react'
import PageWrapper from 'components/layouts/PageWrapper'
import { fetchArtworkList } from 'store/Artwork/actions'
import ArtworkList from 'modules/ArtworkList'
import Gnb from 'components/layouts/Gnb'
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';


const Home = () => {
  const asdf = () => {
    console.log("clicked");

    var socket = new SockJS('/ws');
    let stompClient = Stomp.over(socket);

    stompClient.connect({}, () => {}, () => {});
  }
  return (
    <PageWrapper>
      <Gnb isMainPage title={{ isLogo: true, text: '' }} />

      <button onClick={asdf}>
        click
      </button>
      <ArtworkList fetchAction={fetchArtworkList} />
    </PageWrapper>
  )
}

export default Home
