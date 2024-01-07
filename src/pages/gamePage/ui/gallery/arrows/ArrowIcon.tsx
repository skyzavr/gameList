type Prop = { path: string };

const ArrowIcon = ({ path }: Prop) => {
  return (
    <svg
      width="12"
      height="19"
      viewBox="0 0 12 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={path} stroke="white" strokeWidth="3" />
    </svg>
  );
};
export default ArrowIcon;
