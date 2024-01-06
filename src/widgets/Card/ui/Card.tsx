import { useNavigate } from 'react-router-dom';

import { Game } from '@constant/params';
import { options, SYMB_LEN } from '@constant/params';

import DescArea from '@shared/ui/DescriptionArea/DescArea';

import classes from './card.module.css';

export const Card = (props: Game) => {
  const {
    id,
    title,
    thumbnail: src,
    genre,
    platform,
    publisher,
    release_date: date,
    short_description: desc,
  } = props;

  const navigate = useNavigate();

  const getShortDesc = (str: string) => {
    const endPosition = str.slice(SYMB_LEN).indexOf('.');
    return str.slice(0, SYMB_LEN + endPosition) + ' ...';
  };

  const description = desc.length > SYMB_LEN ? getShortDesc(desc) : desc;

  const releaseDate = new Date(date).toLocaleDateString('en', options);

  const toNavigate = () => {
    navigate('/gamePage', { state: { id: id } });
  };

  const rowData = [
    { id: 'id1', name: 'Genre', value: genre },
    { id: 'id2', name: 'Platform', value: platform },
    { id: 'id3', name: 'Publisher', value: publisher },
    { id: 'id4', name: 'Release', value: releaseDate },
  ];

  return (
    <div className={classes.wrapper} onClick={toNavigate}>
      <section className={classes.image}>
        <img src={src} alt={`game ${title}`} />
        <div className={classes.description}>{description}</div>
      </section>
      <section className={classes.section}>
        <div className={classes.title}>{title}</div>
        <DescArea data={rowData} />
      </section>
    </div>
  );
};
