import { useInfiniteSearchQuery } from "@xefi/xui/hooks";
import { Movie, Search } from "../../models/Movie";
import service from "../../services/MovieService";

const useGetData = () => {
   const { data, fetchNextPage, isFetchingNextPage } = useInfiniteSearchQuery<Movie, Search>({
      queryKey: ["movies"],
      request: ({ search }: { search?: Partial<Search>; }) =>
         service.fetchAll(search?.page ?? 1),
      search: {},
   });
   return {
      data,
      fetchNextPage,
      isFetchingNextPage
   };
};

export default useGetData;