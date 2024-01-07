import "./AboutPage.scss";

function AboutPage() {

  return (
    <div className="about-page">
      <h1 className="about__header">What is Scrapify for?</h1>
      <div className="about__body-container">
        <p className="about__body">
          Scrapify is meant to resemble the lost art of scrapbooking using the vast music library of Spotify to create the same experience and feel of a DIY visual diary on your own browser. Instead of printing out the album-art of the song you want to include in your personal scrapbook and having to buy materials at Michaels, just look up any song you can think of using the Spotify search engine and start journaling!
        </p>
        <p className="about__body">
          1. Using the Spotify search engine on the Music tab and select up to 3 songs to be generated on your very own scrapbook page. Can't think of a song title? Just look up an artist or album name.
        </p>
        <p className="about__body">
          2. Write about the songs you've chosen. There are three notes — one for each song. What are some memories attached to this music? Where were you when you first listened to that song? What or who comes to mind when this this track plays?
        </p>
        <p className="about__body">
          3.  By the time you've selected your music and written about it, the scrapbook page is already complete! You just need to head over to the Scrapbook tab and screenshot the page to share with others or keep for yourself. Happy scrapping!
        </p>
        <div className="signature__container">
          <p className="about__body">
            By <a className="signature__link" href="https://www.linkedin.com/in/ross-mag/">Ross Magparanglan</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage