
let albumData;

fetch("albums.json")
  .then(response => response.json())
  .then(data => albumData = data)
  .catch(error => console.log(error));


function styleAsAlbum(album){
  $('h1, h2, h3').css({
      'font-family':albumData[album]["fontFamily"],
      'color':albumData[album]["titlesColor"],
  })
  $('#albumName').html(albumData[album]["albumName"])
  $('#releaseDate').html(albumData[album]["releaseDate"])
  $('#length').html(albumData[album]["length"])
  $('#numTracks').html(albumData[album]["numTracks"])
  $('#producer').html(albumData[album]["producer"])
  $('#albumDescription').html(albumData[album]["description"])

  $('#spotifyPlayer').attr("src",albumData[album]["albumURL"]);

  $('#spotifyLink').attr("href",albumData[album]["spotifyLink"]);
  $('#youtubeLink').attr("href",albumData[album]["youtubeLink"]);
  $('#appleLink').attr("href",albumData[album]["appleLink"]);

  $('.container-fluid').css({
    'background-color':albumData[album]["backgroundColor"]
  });

  $('#header').css({
    'background-color':albumData[album]["headerColor"]
  });

  $('p, th, td').css({
    'color':albumData[album]["textColor"]
})

$('#header').css({
  'border-color': albumData[album]["borderColor"]
});
}




$('#carouselExampleControls').on('slide.bs.carousel', function(e){
    var albumIndex = e.to;
    console.log(albumIndex);

    let currentAlbum = "";

    switch (albumIndex) {
        case 0 : //THE CAR
          currentAlbum = "THE_CAR"; 
          break;
        case 1: //TBHC
          currentAlbum = "TBHC"; 
          break;
        case 2: //AM
          currentAlbum = "AM"; 
          break;
        case 3: //SIAS
          currentAlbum = "SIAS"; 
          break;
        case 4: //HUMBUG
          currentAlbum = "HUMBUG"; 
          break;
        case 5: //FWN
          currentAlbum = "FWN"; 
          break;
        case 6: //WPSIATWIN
          currentAlbum = "WPSIATWIN"; 
          break;
        default: //THE CAR
          currentAlbum = "THE_CAR"; 
          break;
      }


    styleAsAlbum(currentAlbum);
  });
