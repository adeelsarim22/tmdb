import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import quryString from "query-string";

import Loader from "components/shared/Loader";
import { SEARCH_MOVIE } from "constants/constants";
import { fetchFilteredMedia } from "services/moviesService";
import SearchFormSection from "components/Home/SearchFormSection";
import MediaGridList from "components/Home/MediaGridList/MediaGridList";

const SearchedMedia = () => {
  const location = useLocation();
  const [filterMedia, setFilterMedia] = useState([]);
  const [mediaCount, setMediaCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const parsed = useMemo(() => {
    return quryString.parse(location.search);
  }, [location.search]);

  useEffect(() => {
    getSearchedItems(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parsed]);

  const getSearchedItems = async (page) => {
    setLoading(true);
    const { data } = await fetchFilteredMedia(
      parsed.media,
      parsed.year,
      parsed.genre,
      page
    );
    setLoading(false);
    setFilterMedia([...data.results]);
    setMediaCount(data.total_pages);
  };

  const handleChange = (event, value) => {
    setPage(value);
    getSearchedItems(value);
  };

  return (
    <>
      <SearchFormSection />
      {loading && <Loader />}
      {!loading && (
        <MediaGridList
          moviesList={filterMedia}
          mediaCount={mediaCount}
          onHandleChange={handleChange}
          title={SEARCH_MOVIE}
          mediaType={parsed.media}
          page={page}
        />
      )}
    </>
  );
};
export default SearchedMedia;
