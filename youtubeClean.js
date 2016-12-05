/**
 * youtubeClean.js
 * YouTubeClean
 * 
 * @summary Minimized for typical use as a bookmarklet in web browsers.
 * 
 * @license The Unlicense, http://unlicense.org/
 * @version 0.1.0
 * @author  Derek Kidd
 * @updated 12.02.2016
 * @link    https://github.com/dkidd928/YouTubeClean
 * 
 */

javascript:(function(){u=location.href;if(u.includes("list")){if(u.includes("playlist")){location.href=u.replace('playlist?','embed/playlist?');}else {if(u.includes("index")){u=u.replace(/&index=[0-9]*/,"");}location.href=u.replace('watch?v=','embed/').replace('&list=','?list=');}}else{location.href = u.replace('watch?v=','embed/');}})();