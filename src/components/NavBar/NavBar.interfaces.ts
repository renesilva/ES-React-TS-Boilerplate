interface NavBarOption {
  to: string;
  displayIfLoggedIn?: boolean | null;
  option: string;
}
interface NavBarOptionsProps {
  main: NavBarOption[];
  right: NavBarOption[];
}
export type { NavBarOptionsProps, NavBarOption };
