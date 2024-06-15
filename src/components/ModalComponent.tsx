'use client'
import { useState } from 'react';
import {XuiModal} from '@xefi/xui/modal'
import { XuiButtonsModal, XuiMenuButton} from '@xefi/xui/button'


const ModalComponent = () => {
   const [isOpen, setIsOpen] = useState(false);
   return (
      
      <XuiModal
      isBackdrop
         trigger={() => (
            <XuiMenuButton onClick={() => setIsOpen(true)}>
               Open dialog
            </XuiMenuButton>
         )}
         title='Titre'
         isOpen={isOpen}
         onClose={() => setIsOpen(false)}
         transitions={{
            enter: "lks",

         }}
         actionButtons={() => (
           <XuiButtonsModal
           buttonActionContent='Confirmer'
           buttonCloseContent='Annuler'
           onAction={() => console.log('action')}
           onClose={() => setIsOpen(false)}
           />
         )}
      >
         <p className="mt-2 text-sm/6">
            Your payment has been successfully submitted. We’ve sent you an email with all of the details of
            your order.
         </p>
      </XuiModal >
   );
};

export default ModalComponent;