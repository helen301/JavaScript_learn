fetch('https://api.themoviedb.org/3/movie/550?api_key=58c92a636fd245e821c2c70bff2aaed6')

.then((response) => response.json()) 
  .then((post) => {
      $('.server-result').html();
  } )

$( '.form-group' ).on ( '.btn btn-primary' , (event) => {
        event.preventDefault()
        $('.form-control').val();
} )

.catch((error) => {
    console.log(error);
  });
