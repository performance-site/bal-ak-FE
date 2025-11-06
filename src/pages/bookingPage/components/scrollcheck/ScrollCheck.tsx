import { Link } from 'react-scroll';
import CheckBox from '../checkbox/CheckBox';

const ScrollCheck = ({ to, text }: { to: string; text: string }) => (
  <Link to={to} smooth duration={500} containerId="bookingScroll">
    <CheckBox text={text} />
  </Link>
);

export default ScrollCheck;
