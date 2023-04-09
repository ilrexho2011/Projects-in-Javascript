import React, { useContext } from 'react';
import { GlobalContext } from '@context/GlobalContext';

import IconApplication from '@components/taskbar/IconApplication/IconApplication';
import {Logo} from '@components/taskbar/LogoStartMenu/Logo';
import Systems from '@components/taskbar/Systems/Systems';
import {StartMenu} from '@containers/Taskbar_System/StartMenu';

const Taskbar = () => {

  const { state, sidebarRef } = useContext(GlobalContext);

  return (
    <div id="taskbar_system_tray" ref={sidebarRef} className="os_system">
      <Logo />
      <div className="taskbar"></div>
      <div id="taskband">
        <div className="applications">
          <IconApplication />
        </div>
      </div>
      <div className="system_tray">
        <Systems />
      </div>
      { state.activeMenu  ? <StartMenu /> : null}
    </div>
  );
}
export default Taskbar;