var searchYouTube = (options, callback) => {
  $.ajax({
    url:"https://developers.google.com/youtube/v3/docs/search/list",
    query:options.searchValue,
    max:options.max,
    key: options.key,
    type:'GET',
    contentType: 'application/json',
    success: callback,
    error: null
  }
  )
};



export default searchYouTube;
