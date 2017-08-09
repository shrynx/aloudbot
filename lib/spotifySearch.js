const SpotifyWebApi = require('spotify-web-api-node');

// spotify search
const spotifySearch = async query => {
  // setup spotify
  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: '/',
  });

  //  generate acccess token for every request
  const credentialData = await spotifyApi.clientCredentialsGrant();
  await spotifyApi.setAccessToken(credentialData.body.access_token);

  const spotifySongSearch = await spotifyApi.searchTracks(query);

  return spotifySongSearch.body.tracks.items.map(({
    id, name, artists, external_urls, album,
  }) => ({
    type: 'article',
    parse_mode: 'markdown',
    id,
    title: `${name} - ${artists[0].name}
${album.name}`,
    thumb_url: album.images[0].url,
    message_text: `[${name} - ${artists[0].name}](${external_urls.spotify})`,
  }));
};

module.exports = spotifySearch;
