import { NavLink } from "react-router-dom";

import OurServices from "./our-services.svg";
import DevAgency from "./dev-agency.svg";
import ProcessImage from "./our-process.svg";
import LogoDark from "./codenation_logo_dark.png";
import LogoLight from "./codenation_logo_light0.png";

export const HeaderLogo = () => (
  <NavLink to="/">
    <img src={LogoDark} alt="CodeNation" className="h-7 md:h-6 lg:h-12" />
  </NavLink>
);

export const FooterLogo = () => (
  <NavLink to="/">
    <img src={LogoLight} alt="CodeNation" className="h-7 md:h-10 lg:h-12" />
  </NavLink>
);

export { OurServices, DevAgency, ProcessImage };
