import React from 'react';

import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';



const Message = (props) => {
   return (
      <div className={s.message}>{props.message}</div>
   )
}

const Dialogs = (props) => {




   let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
   let messagesElemens = props.state.message.map(m => <Message message={m.message} />);

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messagesElemens}
         </div>
      </div>
   )
}

export default Dialogs;