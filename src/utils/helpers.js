function truncate(source, size) {
  return source.length > size ? source.slice(0, size - 1) + "…" : source;
}

const GET_CARD_IMAGE_LINK = (imagePath) => {
  return `https://image.tmdb.org/t/p/w220_and_h330_face${imagePath}`;
};

const GET_RATING_SATRS = (averageScore) => {
  return (averageScore / 2).toFixed(1);
};

const GET_RATING_SCORE = (averageScore) => {
  return `${parseInt(averageScore * 10)}%`;
};

export {
  truncate,
  GET_CARD_IMAGE_LINK,
  GET_RATING_SATRS,
  GET_RATING_SCORE
}