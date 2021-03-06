# YouTubeClean

A JavaScript bookmarklet to view YouTube videos/playlists as their embedded equivalent.

### Overview

  YouTubeClean is a program written to take the current YouTube video, playlist, or video as part of a playlist that you are visiting, and navigate your web browser to its embedded equivalent. Embedded YouTube videos don't have comments, or sidebar video suggestions allowing you to watch your content without any other distractions or viewing any unwanted content.

### Usage

This program is intended for use as a **bookmarklet** in a web browser, but can be executed from Google Chrome's address bar and developer console or in other web browsers.

From a YouTube video, playlist, or video playing as part of a playlist, you can run the script by one of these methods:

To run the script as a **bookmarklet**:
  1. Copy the contents of **youtubeClean.js** on _line 15_ and save it as a bookmark. (Google Chrome instructions on saving a bookmarklet detailed below.)
  2. Click your newly created YouTubeClean bookmarklet!

To run the script from Google Chrome's **address bar**:
  1. Copy the contents of **youtubeClean.js** on _line 15_ and paste them into the address bar.
  2. Press the <kbd>Enter/Return</kbd> key on your keyboard.

To run the script from Google Chrome's **developer console**:
  1. Open the developer console by pressing <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>I</kbd> on a PC or <kbd>Option</kbd> + <kbd>Command</kbd> + <kbd>I</kbd> on a Mac.
  2. Copy the contents of **youtubeClean.js** on _line 15_ and paste them into the developer console.
  3. Press the <kbd>Enter/Return</kbd> key on your keyboard.

-----

To save this script as a bookmarklet in Google Chrome:
  1. Navigate to **chrome://bookmarks**
  2. Choose a destination for your bookmarklet (Ex. _Bookmarks Bar_ Folder).
  3. Right-click the destination folder or the white area to the right of the navigation pane.
  4. Select _Add Page..._ from the context menu.
  5. Type a name for the bookmarklet (Ex. _YouTubeClean_) in the **Name** field.
  6. Copy the contents of **youtubeClean.js** on _line 15_ and paste them into the **URL** field.

#### Notes

Because YouTubeClean converts YouTube videos and playlists to their embedded equivalent, videos and playlists that contain ads will not play as embedded links without the use of an ad blocker.


#### Examples

A video on YouTube:

Video                               |  Using YouTubeClean
:----------------------------------:|:-----------------------------------------------:
![Video](./images/video_small.png)  |  ![Video embed](./images/video_embed_small.png)
https://www.youtube.com/watch?v=mnzlJtKy-2s | https://www.youtube.com/embed/mnzlJtKy-2s

A playlist on YouTube:

Playlist                                  |  Using YouTubeClean
:----------------------------------------:|:-----------------------------------------------------:
![Playlist](./images/playlist_small.png)  |  ![Playlist embed](./images/playlist_embed_small.png)
https://www.youtube.com/playlist?list=PLgNjCSGFfYetqrZxlYiU8yWaBs-XMmdqg | https://www.youtube.com/embed/playlist?list=PLgNjCSGFfYetqrZxlYiU8yWaBs-XMmdqg

A video on YouTube as part of a playlist:

Video in Playlist                                         |  Using YouTubeClean
:--------------------------------------------------------:|:-----------------------------------------------------:
![Video in playlist](./images/videoInPlaylist_small.png)  |  ![Video in playlist embed](./images/videoInPlaylist_embed_small.png)
https://www.youtube.com/watch?v=FGkGEePenag&list=PLgNjCSGFfYetqrZxlYiU8yWaBs-XMmdqg&index=49 | https://www.youtube.com/embed/FGkGEePenag?list=PLgNjCSGFfYetqrZxlYiU8yWaBs-XMmdqg