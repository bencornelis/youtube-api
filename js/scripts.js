API_KEY = "AIzaSyDSW307ilh8iZL2gFIqR6R_nOoGpBoSc_Y";

var url = "https://www.googleapis.com/youtube/v3/search?maxResults=50&type=video&order=viewCount&part=snippet";
url += "&key=" + API_KEY;

var videoUrl = "https://www.googleapis.com/youtube/v3/videos?part=snippet%2C+statistics";
videoUrl += "&key=" + API_KEY;

function buildTokenURL(pageToken) {
  return url + "&pageToken=" + pageToken;
}

function buildVideoURL(videoId) {
  return videoUrl + "&id=" + videoId;
}

var i = 0;
function getNextPage(pageToken) {
  $.getJSON(buildTokenURL(pageToken)).then(function(responseJSON) {
    i += 1;
    var firstId = responseJSON.items[0].id.videoId;
    findViewCount(firstId);

    var nextPageToken = responseJSON.nextPageToken;
    console.log(nextPageToken);
    getNextPage(nextPageToken);
  });
}

function findViewCount(videoId) {
  $.getJSON(buildVideoURL(videoId)).then(function(responseJSON) {
    console.log("Page " + i + " view count: " + responseJSON.items[0].statistics.viewCount);
  })
}

function viewCount(videoId) {
  $.getJSON(buildVideoURL(videoId)).then(function(responseJSON) {
    console.log("Page " + i + " view count: " + responseJSON.items[0].statistics.viewCount);
  });
}

$(function() {
  $.getJSON(url).then(function(responseJSON) {
    getNextPage(responseJSON.nextPageToken);
  })
});

var relatedVidsUrl = "https://www.googleapis.com/youtube/v3/search?maxResults=50&type=video&part=snippet"
relatedVidsUrl += "&key=" + API_KEY;
function obscureVideoId(videoId) {
  var url = relatedVidsUrl + "&relatedToVideoId=" + videoId;
  var videoViews = {}
  $.getJSON(url).then(function(responseJSON) {
    var relatedIds = responseJSON.items.map(function(item) {return item.id.videoId;});
    getNext
  });
}
