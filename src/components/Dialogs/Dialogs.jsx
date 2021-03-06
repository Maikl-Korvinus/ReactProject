import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/state';

import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';



const Message = (props) => {
   return (
      <div className={s.message}>{props.message}</div>
   )
}

const Dialogs = (props) => {


   let state = props.store.getState().dialogsPage;

   let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
   let messagesElemens = state.message.map(m => <Message message={m.message} />);
   let newMessageBody = state.newMessageBody;

   let onSendMessageClick = () => {

      props.store.dispatch(sendMessageCreator())
   }
   let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.store.dispatch(updateNewMessageBodyCreator(body))
   }


   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            <div>{messagesElemens}</div>
            <div>
               <div><textarea value={newMessageBody}
                  onChange={onNewMessageChange}
                  placeholder='Enter your message'></textarea></div>
               <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>
         </div>
      </div>
   )
}

export default Dialogs;