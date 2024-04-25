import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const LinkLoop =links.map((link)=>(<a href={'#'+link} key={link}>{link}</a>))
  return(
   <nav>{LinkLoop}</nav>);
}

export default NavBar;
