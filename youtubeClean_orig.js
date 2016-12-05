/**
 * youtubeClean_orig.js
 * YouTubeClean
 * 
 * @summary Original JavaScript program with comments.
 * 
 * @license The Unlicense, http://unlicense.org/
 * @version 0.1.0
 * @author  Derek Kidd
 * @updated 12.02.2016
 * @link    https://github.com/dkidd928/YouTubeClean
 * 
 */

function youtubeClean() {
    //store URI of the current tab
    uri = location.href;
    //check if URI is part of a playlist
    if (uri.includes("list")) {
        //check if URI is a playlist page
        if (uri.includes("playlist")) {
            //script executed on a playlist page
            //navigate to embedded playlist equivalent
            location.href = uri.replace('playlist?','embed/playlist?');
        }
        else {
            //script executed on a video page as part of a playlist
            if (uri.includes("index")) {
                //current video was not first video in playlist
                uri = uri.replace(/&index=[0-9]*/,"");
            }
            //navigate to embedded playlist equivalent from current video
            location.href = uri.replace('watch?v=','embed/').replace('&list=','?list=');
        }
    }
    else {
        //navigate to embedded video equivalent
        location.href = uri.replace('watch?v=','embed/');
    }
}

youtubeClean();