/**
 * youtubeClean.js
 * YouTubeClean
 * 
 * @summary Minimized for typical use as a bookmarklet in web browsers.
 * 
 * @license The Unlicense, http://unlicense.org/
 * @version 0.2.0
 * @author  Derek Kidd
 * @updated 12.08.2020
 * @link    https://github.com/dkidd928/YouTubeClean
 * 
 */

javascript:(!function(){var e=new URLSearchParams(window.location.search),a=e.get("v"),n=e.get("list");n=null!=n?"?list="+n:"",location.href="/embed/"+a+n}();
