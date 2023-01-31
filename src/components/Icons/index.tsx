import {
  faAngleDown,
  faBars,
  faMagnifyingGlass,
  faMoon,
  faSun,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IconProps {
  style: React.CSSProperties;
}

export function NavbarIcon() {
  return <FontAwesomeIcon icon={faBars} size='2x' />;
}

export function CloseIcon() {
  return <FontAwesomeIcon icon={faXmark} size='lg' />;
}

export function SearchIcon() {
  return <FontAwesomeIcon icon={faMagnifyingGlass} />;
}

export function ExpandIcon(props: IconProps) {
  return <FontAwesomeIcon icon={faAngleDown} style={props.style} />;
}

export function MoonIcon() {
  return <FontAwesomeIcon icon={faMoon} />;
}

export function SunIcon() {
  return <FontAwesomeIcon icon={faSun} />;
}
