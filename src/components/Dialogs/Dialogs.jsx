import React from 'react';

import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';



const Message = (props) => {
   return (
      <div className={s.message}>{props.message}</div>
   )
}

const Dialogs = (props) => {

   let dialogs = [
      { id: 1, name: "Maikle", },
      { id: 2, name: "Trofim", },
      { id: 3, name: "Polya", },
      { id: 4, name: "Ilui", },
      { id: 5, name: "Sanya", },
   ]

   let messages = [
      { id: 1, message: "Hi", },
      { id: 2, message: "Whats up", },
      { id: 3, message: "Yo", },
      { id: 4, message: "Yo", },
      { id: 5, message: "Yo", },
   ]


   let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
   let messagesElemens = messages.map(m => <Message message={m.message} />);

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