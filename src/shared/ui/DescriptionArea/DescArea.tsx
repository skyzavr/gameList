import classes from './descArea.module.css';

type Prop = {
  id: string;
  name: string;
  value: string;
};

interface Data {
  data: Prop[];
}

const DescArea = ({ data }: Data) => {
  return (
    <div className={classes.wrapper}>
      {data.map(({ id, name, value }: Prop) => (
        <div className={classes.row} key={id}>
          <div className={classes.propertyName}>{name}</div>
          <div className={classes.propertyValue}>
            {value === '?' ? 'No Data' : value}
          </div>
        </div>
      ))}
    </div>
  );
};
export default DescArea;
