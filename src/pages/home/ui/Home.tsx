import { RandomGame } from '@widgets/RandomGame';
import { CardSection } from '@widgets/CardSection';
import { SettingArea } from '@widgets/SettingArea';
import Search from '@shared/ui/Search/Search';

import classes from './home.module.css';

export const Home = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.searchArea}>
        <Search />
        <RandomGame />
      </div>
      <SettingArea />
      <CardSection />
    </div>
  );
};
