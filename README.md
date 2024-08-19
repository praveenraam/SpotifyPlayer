# SpotifyApp
**SpotifyApp** is a simple local music player built using React Native. This app provides basic functionalities to play, pause, skip to the next track, and go back to the previous track. It’s a minimalistic music player designed to demonstrate the core features of a media player in a mobile app.

## Features
- Play/Pause: Easily control the playback of your music.
- Next/Previous: Skip to the next track or go back to the previous one.
## Installation
1.Clone the repository:

```bash 
git clone https://github.com/praveenraam/SpotifyPlayer.git

cd spotifyapp
```
2.Install dependencies:

```bash
npm install
```

3.Run the app:

- For Android:
```bash
npm run-android
```
- For iOS:
```bash
npm run-ios
```

## Getting Started
This project was developed by following a [YouTube tutorial by Hitesh](https://youtu.be/yqMKsKzUanU?si=Voer8QlPEioRJp5Z). It’s a basic version of a music player app, and a great starting point if you're looking to understand how to manage media playback in React Native.

## Screenshots
![App Screenshot](README/imgs/1.png) <br>

![alt text](README/imgs/2.png)
## How It Works
- The app uses react-native-track-player to manage audio playback.
- Buttons for play, pause, next, and previous control the playback.
## Future Improvements
This is a basic version of the app. Future versions may include better Features:

## Credits
- [Hitesh's YouTube](https://www.youtube.com/@HiteshCodeLab) Tutorial: This project was inspired and guided by the tutorial from Hitesh on YouTube.
## License
This project is licensed under the MIT License.

## For reference purposes
In case if you have any issues in setting.gradle while running in android, try using ``npm run android --verbose`` to run the application during the development.