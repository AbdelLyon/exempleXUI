
'use client';
import {XUIToggleTheme} from '@xefi/xui/theme';

const NavbarComponent = () => {
   return (
      <div className='w-full flex justify-between px-4 py-4'>
         <p>Test</p>
         <XUIToggleTheme className="text-red-600" />
         
      </div>
   );
};

export default NavbarComponent;