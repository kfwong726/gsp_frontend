import { Icon } from "@iconify/react";

export type SidebarItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuItems?: SidebarItem[];
};

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    title: "Home",
    path: "/",
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: "Translations",
    path: "/translations",
    icon: <Icon icon="cil:language" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      {
        title: "settings",
        path: "/translations/settings",
        icon: <Icon icon="cil:settings" width="24" height="24" />,
      },
      {
        title: "languages",
        path: "/translations/languages",
        icon: <Icon icon="carbon:document" width="24" height="24" />,
      },
    ],
  },
  {
    title: "Logout",
    path: "/logout",
    icon: <Icon icon="ion:exit-outline" width="24" height="24" />,
  },
];
