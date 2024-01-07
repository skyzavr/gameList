import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { API, Game } from '@constant/params';

import { useFetch } from '@shared/hooks/useFetch';
import Button from '@shared/ui/Button/Button';

export const RandomGame = () => {
  const navigate = useNavigate();

  const { data } = useFetch(`${API}/games`);

  const compare = useCallback((a: Game, b: Game, sortParam: string) => {
    const firstObj = a[sortParam as keyof Game],
      secondObj = b[sortParam as keyof Game];
    if (firstObj < secondObj) return -1;
    if (firstObj > secondObj) return 1;
    return 0;
  }, []);

  const getRandomGameId = () => {
    const res = (data as Game[]).sort((a, b) => compare(a, b, 'id'));
    const gameId = Math.floor(Math.random() * (res.length - 0));
    navigate('/gamePage', { state: { id: gameId } });
  };

  return <Button clickHandler={getRandomGameId}>Random Game</Button>;
};
