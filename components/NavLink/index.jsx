import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

const NavLink = ({ className, href, children, ...rest }) => {
  const router = useRouter();

  return (
    <Link href={href} {...rest}>
      <a className={clsx(router.pathname === href && "active", className)}>
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
