/**
 * youtubeClean.js
 * YouTubeClean
 * 
 * @summary Minimized for typical use as a bookmarklet in web browsers.
 * 
 * @license The Unlicense, http://unlicense.org/
 * @version 0.2.1
 * @author  Derek Kidd
 * @updated 12.08.2020
 * @link    https://github.com/dkidd928/YouTubeClean
 * 
 */

javascript:!function(){var l=new URLSearchParams(window.location.search),a=l.get("v"),e=l.get("list");null!=e?(e="?list="+e,null==a&&(a="playlist")):e="",location.href="/embed/"+a+e}();
