import { SwitchTheme } from "@/theme/switch-theme.component";

export const Header = () => {
  return (
    <header>
      <nav className="navbar bg-base-300 shadow-lg px-12 justify-center">
        <div className="max-w-screen-lg w-full">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-primary">
              Where in the world?
            </h1>
          </div>
          <div className="flex-none">
            <SwitchTheme />
          </div>
        </div>
      </nav>
    </header>
  );
};
