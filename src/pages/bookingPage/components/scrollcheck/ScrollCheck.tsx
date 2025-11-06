import { Link } from 'react-scroll';
import CheckBox from '../checkbox/CheckBox';

interface ScrollCheckProps {
  to: string;
  text: string;
  checked: boolean;
  onChange: () => void;
}

const ScrollCheck: React.FC<ScrollCheckProps> = ({
  to,
  text,
  checked,
  onChange,
}) => (
  <Link
    to={to}
    smooth
    duration={500}
    containerId="bookingScroll"
    onClick={onChange}
  >
    <CheckBox text={text} checked={checked} />
  </Link>
);

export default ScrollCheck;
