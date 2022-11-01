import Loader from "components/shared/Loader";
import React, { useEffect, useState } from "react";

import { POPULAR_MOVIES_TITLE } from "../../constants/constants";
import { fetchTrendingMovies } from "../../services/moviesService";
import MediaGridList from "./MediaGridList/MediaGridList";

const PopularMedia = () => {
  const [popularMedia, setPopularMedia] = useState([]);
  const [mediaCount, setMediaCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchTrending = async (pageNumber) => {
    setLoading(true);
    try {
      const { data } = await fetchTrendingMovies(pageNumber);
      setLoading(false);
      setMediaCount(data.total_pages);
      setPopularMedia(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event, value) => {
    setPage(value);
    fetchTrending(value);
  };

  useEffect(() => {
    fetchTrending(1);
  }, []);

  return (
    <>
      {!loading && (
        <MediaGridList
          title={POPULAR_MOVIES_TITLE}
          mediaCount={mediaCount}
          onHandleChange={handleChange}
          moviesList={popularMedia}
          page={page}
        />
      )}
      {loading && <Loader />}
    </>
  );
};

export default PopularMedia;
