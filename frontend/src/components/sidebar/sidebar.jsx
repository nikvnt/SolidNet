import React, { useState } from 'react';
import { Header, HeaderName, SideNav, SideNavItems, SideNavLink, SkipToContent, Theme } from '@carbon/react';
import { Fade, Login, Logout, UserFollow, Sun, Moon } from '@carbon/icons-react';
import useAuth from 'frontend/src/hooks/useAuth';
import './sidebar.scss';

const Sidebar = () => {
  const { session, logout } = useAuth();
  const currentPath = window.location.pathname;

  const getStoredTheme = () => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme : 'g90';
  };

  const [theme, setTheme] = useState(getStoredTheme);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'g90' ? 'g30' : 'g90';
    handleThemeChange(newTheme);
  };

  return (
    <Theme theme={theme}>
      <Header aria-label="IBM Platform Name">
        <SkipToContent />
        <HeaderName href="#" prefix="Solidarité">
          [SolidNet]
        </HeaderName>
        <label>
          {theme === 'g90' ? (
            <Sun width="20" height="20"
              onClick={toggleTheme}
              onMouseOver={(e) => {
                e.target.style.cursor = 'pointer';
              }}
              style={{ transform: 'scale(1.5)', transition: 'transform 0.01s' }}
            />
          ) : (
            <Moon width="22" height="22"
              onClick={toggleTheme}
              onMouseOver={(e) => {
                e.target.style.cursor = 'pointer';
              }}
            />
          )}
        </label>
      </Header>
      <SideNav expanded={true} isChildOfHeader={false} aria-label="Side navigation">
        <SideNavItems>
          {session ? (
            <div>
              <SideNavLink renderIcon={Fade} href={`/home`} large>
                Home
              </SideNavLink>
              <SideNavLink renderIcon={Logout} onClick={logout} large>
                Logout
              </SideNavLink>
            </div>
          ) : (
            <div>
              <SideNavLink renderIcon={UserFollow} href={`/signup`} large>
                Registre-se
              </SideNavLink>
              <SideNavLink renderIcon={Login} href={`/login`} large>
                Login
              </SideNavLink>
            </div>
          )}
        </SideNavItems>
      </SideNav>
    </Theme>
  );
};

export default Sidebar;
