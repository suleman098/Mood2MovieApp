# Mood2Movie 🎥

Mood2Movie is a React Native application that recommends movies based on your current mood. It provides a seamless and visually appealing experience, inspired by Netflix's design, to help you find the perfect movie to match your mood.

## Features ✨

### 1. **Mood-Based Movie Recommendations**
- Select your mood from a variety of options, each represented by an emoji and a descriptive name.
- Get personalized movie recommendations based on your selected mood.

### 2. **Horizontal Movie Carousel**
- Browse through movies in a sleek horizontal carousel.
- Each movie is displayed as a card with its poster and genre tags.

### 3. **Movie Details Modal**
- Tap the "Info" button on a movie card to view detailed information about the movie.
- Details include:
  - Title
  - Release year
  - Runtime
  - Genres
  - Rating
  - Language
  - Overview

### 4. **Movie Trailer Modal**
- Tap the "Trailer" button on a movie card to watch the trailer.
- Trailers are fetched from YouTube and displayed in an embedded player.

### 5. **Mood Selection Screen**
- A visually engaging screen to select your mood.
- Each mood button is styled dynamically to indicate the selected mood.

### 6. **Initial Splash Screen**
- A splash screen with the app's logo that transitions to the mood selection screen.

### 7. **Error Handling**
- Displays error messages if movie data or trailers fail to load.

### 8. **Responsive Design**
- Optimized for various screen sizes and orientations.

## Installation 🛠️

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Mood2Movie.git
   cd Mood2Movie
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Metro bundler:
   ```bash
   npx react-native start
   ```

4. Run the app:
   - For Android:
     ```bash
     npx react-native run-android
     ```
   - For iOS:
     ```bash
     npx react-native run-ios
     ```

## API Integration 🌐

### 1. **TMDb API**
- Used to fetch movie data based on genres.
- Requires an API key and Bearer token.

### 2. **YouTube API**
- Used to fetch movie trailers.
- Requires a YouTube API key.

## File Structure 📂

- **`components/`**: Contains reusable UI components like `MovieCard`, `MovieDetailsModal`, `MovieTrailerModal`, etc.
- **`context/`**: Provides global context for moods and API keys.
- **`Hooks/`**: Custom hooks for fetching movies and trailers.
- **`Screens/`**: Contains screens like `InitialScreen` and `RecommendationScreen`.

## Technologies Used 🛠️

- **React Native**: For building the mobile app.
- **TMDb API**: For fetching movie data.
- **YouTube API**: For fetching trailers.
- **react-native-youtube-iframe**: For embedding YouTube trailers.

## Future Enhancements 🚀

- Add user authentication for personalized recommendations.
- Allow users to save favorite movies.
- Add more moods and genres.
- Implement offline support for saved movies.

## License 📜

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙌

- [TMDb API](https://www.themoviedb.org/documentation/api) for movie data.
- [YouTube API](https://developers.google.com/youtube) for trailer data.
- Inspired by Netflix's UI design.

---
Made by Suleman Khan
