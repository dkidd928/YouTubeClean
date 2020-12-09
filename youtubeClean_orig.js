/**
 * youtubeClean_orig.js
 * YouTubeClean
 * 
 * @license The Unlicense, http://unlicense.org/
 * @version 0.2.0
 * @author  Derek Kidd
 * @updated 12.08.2020
 * @link    https://github.com/dkidd928/YouTubeClean
 * 
 */

function ytClean() {
    var urlParams = new URLSearchParams(window.location.search);
    var video = urlParams.get('v');
    var playlist = urlParams.get('list');
    if (playlist != null) {
        playlist = "?list=" + playlist;
    }
    else {
        playlist = "";
    }

    location.href = "/embed/" + video + playlist;
}

ytClean();
