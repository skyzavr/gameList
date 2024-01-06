import SelectArea from '@shared/ui/Select/Select';
import { GenreParam, FilterParam } from '@constant/params';

import { updateFilterParam } from '../modal/filterSlice';
import { updateSortParam } from '../modal/sortSlice';

import classes from './settingArea.module.css';

export const SettingArea = () => {
  return (
    <div className={classes.filters}>
      <SelectArea
        placeholder="Sort by"
        data={FilterParam}
        onUpdateClb={updateSortParam}
      />
      <SelectArea
        placeholder="Filter by"
        data={GenreParam}
        onUpdateClb={updateFilterParam}
      />
    </div>
  );
};
