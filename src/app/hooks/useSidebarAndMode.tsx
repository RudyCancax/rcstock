import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";
import { useAppDispatch, useAppSelector } from "../redux";

export const useSidebarAndMode = () => {
  const dispatch = useAppDispatch();

  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };

  return { isSidebarCollapsed, toggleSidebar, isDarkMode, toggleDarkMode };
};
