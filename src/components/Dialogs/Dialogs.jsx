import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            <div className={s.dialog + " " + s.active}>
               Maikle
            </div>
            <div className={s.dialog}>
               Trofim
            </div>
            <div className={s.dialog}>
               Polya
            </div>
            <div className={s.dialog}>
               Ilui
            </div>
            <div className={s.dialog}>
               Sanya
            </div>
         </div>
         <div className={s.messages}>
            <div className={s.message}>Hi</div>
            <div className={s.message}>Whats up</div>
            <div className={s.message}>Aloha</div>
         </div>
      </div>
   )
}

export default Dialogs;