import * as React from "react"
import { Helmet } from "react-helmet"

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta property="og:title" content="Bad Boy (with Young Thug)"/>
        <meta property="og:description" content="Juice WRLD · Single · 2021 · 1 songs."/>
        <meta property="og:url" content="https://open.spotify.com/album/5hUFZjxtqYvxm9FGUhHCdE"/>
        <meta property="og:image" content="https://i.scdn.co/image/ab67616d0000b2730bda1f6aa92d42f44d621db6"/>
        <meta property="og:type" content="music.album"/>
        <meta property="og:site_name" content="Spotify"/>
      </Helmet>
      <main>
        Hello World
      </main>
    </>
  )
}

export default IndexPage
