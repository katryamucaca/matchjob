import React from "react";
import Link from "next/link";
import classes from "./sidebar.module.scss";
import cn from "classnames";

export interface SidebarNavItem {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

export interface SidebarProps {
  currentPath?: string;
  navItems: SidebarNavItem[];
  header?: React.ReactNode;
  footer?: React.ReactNode;
  logoHref?: string;
  logoText?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  currentPath,
  navItems,
  header,
  footer,
  logoHref,
  logoText,
}) => {
  return (
    <>
      {header && <div className={classes.sidebarHeader}>{header}</div>}

      {logoHref && logoText && (
        <div className={classes.sidebarLogo}>
          <Link href={logoHref}>{logoText}</Link>
        </div>
      )}

      <nav className={classes.sidebarNav}>
        {navItems.map((item) => {
          const isActive = currentPath === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(classes.sidebarLink, {
                [classes.activeSidebarLink]: isActive,
              })}
            >
              {item.icon && <div className={classes.navIcon}>{item.icon}</div>}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {footer && <div className={classes.sidebarFooter}>{footer}</div>}
    </>
  );
};

export default Sidebar;
