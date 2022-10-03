import React from 'react';

interface iNavBarOption {
  to?: string | null;
  option?: string | null;
  displayIfLoggedIn?: boolean | null;
  jsx?: React.ReactElement | null;
}
interface NavBarOptionsProps {
  main: iNavBarOption[];
  right: iNavBarOption[];
}
export type { NavBarOptionsProps, iNavBarOption };
