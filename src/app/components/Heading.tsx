type HeadingProps = {
  title: string;
};

const Heading = ({ title }: HeadingProps) => {
  return <h2 className="mb-4">{title}</h2>;
};

export default Heading;
