import classes from './spin.module.css';

const Spin = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.loader}></div>
      <div className={classes.title}>Loading</div>
    </div>
  );
};
export default Spin;
