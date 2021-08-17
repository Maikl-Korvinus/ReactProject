import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';


const DialogItem = (props) => {
   let path = "/dialogs/" + props.id;
   return (
      <div className={s.dialog + " " + s.active}>
         <NavLink to={path}>{props.name}</NavLink>
      </div>
   )
}
const Message = (props) => {
   return (
      <div className={s.message}>{props.message}</div>
   )
}

const Dialogs = (props) => {
   let dialogData = [
      { id: 1, name: "Maikle", },
      { id: 2, name: "Trofim", },
      { id: 3, name: "Polya", },
      { id: 4, name: "Ilui", },
      { id: 5, name: "Sanya", },
   ]
   let messageData = [
      { id: 1, message: "Hi", },
      { id: 2, message: "Whats up", },
      { id: 3, message: "Yo", },
      { id: 4, message: "Yo", },
      { id: 5, message: "Yo", },
   ]
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            <DialogItem name={dialogData[0].name} id={dialogData[0].id} />
            <DialogItem name={dialogData[1].name} id={dialogData[1].id} />
            <DialogItem name={dialogData[2].name} id={dialogData[2].id} />
            <DialogItem name={dialogData[3].name} id={dialogData[3].id} />
            <DialogItem name={dialogData[4].name} id={dialogData[4].id} />

         </div>
         <div className={s.messages}>
            <Message message={messageData[0].message} id={dialogData[0].id} />
            <Message message={messageData[1].message} id={dialogData[1].id} />
            <Message message="Yo" />
            <Message message="Yo" />
            <Message message="Yo" />
         </div>
      </div>
   )
}

export default Dialogs;