import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export type MegaMenuItem = {
  id: number;
  label: string;
  subMenus?: {
    title: string;
    items: {
      label: string;
      description: string;
      icon: React.ElementType;
      href: string;
    }[];
  }[];
  link?: string;
};

export interface MegaMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  items: MegaMenuItem[];
  className?: string;
}

const MegaMenu = React.forwardRef<HTMLUListElement, MegaMenuProps>(
  ({ items, className, ...props }, ref) => {
    const [openMenu, setOpenMenu] = React.useState<string | null>(null);
    const [isHover, setIsHover] = React.useState<number | null>(null);

    const handleHover = (menuLabel: string | null) => {
      setOpenMenu(menuLabel);
    };

    return (
      <ul
        ref={ref}
        className={`relative flex items-center space-x-0 ${className || ""}`}
        {...props}
      >
        {items.map((navItem) => (
          <li
            key={navItem.label}
            className="relative"
            onMouseEnter={() => handleHover(navItem.label)}
            onMouseLeave={() => handleHover(null)}
          >
            {navItem.link ? (
              <Link
                href={navItem.link}
                className="relative flex cursor-pointer items-center justify-center gap-1 py-1.5 px-4 text-sm text-muted-foreground transition-colors duration-300 hover:text-brand-accent group"
                onMouseEnter={() => setIsHover(navItem.id)}
                onMouseLeave={() => setIsHover(null)}
              >
                <span>{navItem.label}</span>
                {(isHover === navItem.id) && (
                  <motion.div
                    layoutId="hover-bg"
                    className="absolute inset-0 size-full bg-brand-accent/10 border border-brand-accent/20"
                    style={{
                      borderRadius: 99,
                    }}
                  />
                )}
              </Link>
            ) : (
              <button
                className="relative flex cursor-pointer items-center justify-center gap-1 py-1.5 px-4 text-sm text-muted-foreground transition-colors duration-300 hover:text-brand-accent group"
                onMouseEnter={() => setIsHover(navItem.id)}
                onMouseLeave={() => setIsHover(null)}
              >
                <span>{navItem.label}</span>
                {navItem.subMenus && (
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 group-hover:rotate-180 ${
                      openMenu === navItem.label ? "rotate-180" : ""
                    }`}
                  />
                )}
                {(isHover === navItem.id || openMenu === navItem.label) && (
                  <motion.div
                    layoutId="hover-bg"
                    className="absolute inset-0 size-full bg-brand-accent/10 border border-brand-accent/20"
                    style={{
                      borderRadius: 99,
                    }}
                  />
                )}
              </button>
            )}

            <AnimatePresence>
              {openMenu === navItem.label && navItem.subMenus && (
                <div className="absolute left-1/2 transform -translate-x-1/3 top-full w-auto pt-2 z-50">
                  <motion.div
                    className="w-max border border-white/10 bg-background/95 backdrop-blur-xl p-6 shadow-2xl"
                    style={{
                      borderRadius: 16,
                    }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex w-fit shrink-0 space-x-12 overflow-hidden">
                      {navItem.subMenus.map((sub) => (
                        <motion.div layout className="w-full min-w-[200px]" key={sub.title}>
                          <h3 className="mb-4 text-sm font-semibold text-brand-accent uppercase tracking-wider">
                            {sub.title}
                          </h3>
                          <ul className="space-y-4">
                            {sub.items.map((item) => {
                              const Icon = item.icon;
                              return (
                                <li key={item.label}>
                                  <Link
                                    href={item.href}
                                    className="flex items-start space-x-3 group p-2 rounded-lg hover:bg-brand-accent/5 transition-colors duration-200"
                                  >
                                    <div className="flex size-9 shrink-0 items-center justify-center rounded-md border border-brand-accent/30 text-brand-accent transition-all duration-300 group-hover:bg-brand-accent group-hover:text-white group-hover:shadow-md">
                                      <Icon className="h-4 w-4 flex-none" />
                                    </div>
                                    <div className="w-max leading-5">
                                      <p className="shrink-0 text-sm font-medium text-foreground group-hover:text-brand-accent transition-colors duration-200">
                                        {item.label}
                                      </p>
                                      <p className="shrink-0 text-xs text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                                        {item.description}
                                      </p>
                                    </div>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    );
  }
);

MegaMenu.displayName = "MegaMenu";

export default MegaMenu;
