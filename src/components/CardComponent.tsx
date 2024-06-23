"use client";
import { XuiCard } from "@xefi/xui/card";
import Image from "next/image";
import { XuiTitle } from "@xefi/xui/title";
import { useEffect } from "react";
import { useInView } from "@xefi/xui/hooks";

import useGetData from "@/hooks/useGetData";

const CardComponent = () => {
  const { data: movies, fetchNextPage } = useGetData();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && fetchNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }

    return text.slice(0, maxLength) + "...";
  };

  return (
    <div className="grid grid-cols-6  gap-4">
      {movies.map((movie, i) => (
        <div key={movie.id} ref={movies.length === i + 1 ? ref : null}>
          <XuiCard
            className="max-w-[250px] cursor-pointer justify-stretch"
            img={() => (
              <Image
                alt="test-img"
                className="rounded-t-md "
                height={50}
                objectFit="cover"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                width={250}
              />
            )}
          >
            <XuiTitle className="w-full truncate font-semibold" tag="h3">
              {movie.title}
            </XuiTitle>
            <p className="text-ellipsis ">
              {truncateText(movie.overview, 100)}{" "}
            </p>
          </XuiCard>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
