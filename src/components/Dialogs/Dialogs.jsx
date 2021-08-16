import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            <div className={s.dialog + " " + s.active}>
               <NavLink to="/dialogs/1">Maikle</NavLink>
            </div>
            <div className={s.dialog}>
               <NavLink to="/dialogs/2">Trofim</NavLink>
            </div>
            <div className={s.dialog}>
               <NavLink to="/dialogs/3">Polya</NavLink>
            </div>
            <div className={s.dialog}>
               <NavLink to="/dialogs/4">Ilui</NavLink>
            </div>
            <div className={s.dialog}>
               <NavLink to="/dialogs/5">Sanya</NavLink>
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