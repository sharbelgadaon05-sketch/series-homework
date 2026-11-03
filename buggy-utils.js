export const getDramas = series => series.filter(show => show.genre === "Drama");

export const getEpisodeById = (season, idText) =>
  season.episodes.find(episode => String(episode.id) === idText);

export const addEpisodeToFirstSeason = (show, episode) => ({
  ...show,
  seasons: show.seasons.map((season, index) =>
    index === 0
      ? {
          ...season,
          episodes: [...season.episodes, episode]
        }
      : season
  )
});