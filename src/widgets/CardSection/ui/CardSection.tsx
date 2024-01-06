import { Fragment, RefObject, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { API, Game } from '@constant/params';

import { rootState } from '@app/modal/store';
import { Card } from '@widgets/Card';
import { useObserver } from '@shared/hooks/useObserver';
import { useFetch } from '@shared/hooks/useFetch';
import Boundries from './Boundries/Boundries';

import classes from './cardSection.module.css';

export const CardSection = () => {
  const { searchQuery } = useSelector((store: rootState) => store.search);
  const { sortParam } = useSelector((store: rootState) => store.sort);
  const { filterParam } = useSelector((store: rootState) => store.filter);

  const [currentData, setCurrentData] = useState<Game[]>([]);
  const [curentGap, setCurrentGap] = useState<number>(1);

  const { error, isError, isLoading, setIsLoading, data } = useFetch(
    `${API}/games`
  );
  const [node, isIntersecting] = useObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  });
  const compare = useCallback((a: Game, b: Game, sortParam: string) => {
    const firstObj = a[sortParam as keyof Game].toLowerCase(),
      secondObj = b[sortParam as keyof Game].toLowerCase();
    if (firstObj < secondObj) return -1;
    if (firstObj > secondObj) return 1;
    return 0;
  }, []);

  const filterClb = useCallback(
    (item: Game, param: string, anotherParam: string) => {
      const value = item[param as keyof Game].toLowerCase();
      return value.includes(anotherParam.toLowerCase());
    },
    []
  );

  const updateGameList = () => {
    const res =
      searchQuery === ''
        ? [...(data as Game[])]
        : [
            ...(data as Game[]).filter((el: Game) =>
              filterClb(el, 'title', searchQuery)
            ),
          ];

    return filterParam === ''
      ? res.sort((a, b) => compare(a, b, sortParam))
      : res
          .filter((el) => filterClb(el, 'genre', filterParam))
          .sort((a, b) => compare(a, b, sortParam));
  };

  useEffect(() => {
    setIsLoading(true);
    setCurrentData(updateGameList());
    setIsLoading(false);
    setCurrentGap(1);
  }, [searchQuery, sortParam, filterParam]);

  useEffect(() => {
    setCurrentData((data as Game[]).sort((a, b) => compare(a, b, sortParam)));
  }, [data]);

  useEffect(() => {
    if (!isIntersecting) return;
    setCurrentGap((prev) => prev + 1);
  }, [isIntersecting]);

  return (
    <Boundries
      error={error}
      isError={isError}
      isLoading={isLoading}
      dataLen={currentData.length}
    >
      <div className={classes.gameNumberTitle}>
        Total number of games {currentData.length > 1 ? 'are' : 'is'} :
        {currentData.length}
      </div>
      <section className={classes.wrapper}>
        {currentData.slice(0, curentGap * 10).map((card, ind) => (
          <Fragment key={card.id}>
            {ind === curentGap * 10 - 1 ? (
              <div ref={node as RefObject<HTMLDivElement>}>
                <Card {...card} />
              </div>
            ) : (
              <Card {...card} />
            )}
          </Fragment>
        ))}
      </section>
    </Boundries>
  );
};
