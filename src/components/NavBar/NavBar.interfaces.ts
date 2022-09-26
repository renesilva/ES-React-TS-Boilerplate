interface iNavBarOption {
  to: string;
  displayIfLoggedIn?: boolean | null;
  option: string;
}
interface NavBarOptionsProps {
  main: iNavBarOption[];
  right: iNavBarOption[];
}
export type { NavBarOptionsProps, iNavBarOption };
