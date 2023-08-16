import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import {
  faAngleDown,
  faBars,
  faMagnifyingGlass,
  faMoon,
  faSun,
  faXmark,
  faGlobe,
  faCaretUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IconProps {
  style: React.CSSProperties;
}

export function NavbarIcon(props: IconProps) {
  return <FontAwesomeIcon icon={faBars} style={props.style} />;
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
export function GitHubIcon() {
  return <FontAwesomeIcon icon={faGithub} />;
}
export function LinkedinIcon() {
  return <FontAwesomeIcon icon={faLinkedin} />;
}
export function WppIcon() {
  return <FontAwesomeIcon icon={faWhatsapp} />;
}
export function GlobeIcon() {
  return <FontAwesomeIcon icon={faGlobe} />;
}
export function CaretUpIcon() {
  return <FontAwesomeIcon icon={faCaretUp} />;
}
