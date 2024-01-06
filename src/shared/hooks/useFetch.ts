import { useState, useEffect } from 'react';
import { Game, GameDescT } from '@constant/params';

type TGame = Game | Game[] | GameDescT;
export const useFetch = (api: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [data, setData] = useState<TGame>([]);

  const getData = async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      setError('');
      const res = await fetch(api);
      if (!res.ok) throw new Error(`Something went wrong`);
      const data = (await res.json()) as TGame;
      setData(data);
    } catch (error) {
      setError('We have some problem with our data. Try it for later');
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData().catch(console.error);
  }, [api]);

  return { error, isError, isLoading, setIsLoading, data };
};
