
'use client';
import {  XThemeSwitch} from '@xefi/xui/theme';

const NavbarComponent = () => {
   return (
      <div className='w-full flex justify-between px-4 py-4'>
         <p>Test</p>
         <XThemeSwitch className="text-red-600" />
         
      </div>
   );
};

export default NavbarComponent;