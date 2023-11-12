import React from "react";
import styles from "./Messages.module.scss";
import Message from "./Message/Message";
import Dialogs from "./Dialogs/Dialogs";


const Messages = (props) => {
  return (
    <div>
      <h1>Messages</h1>
      <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>
          {props.state.dialogsData.map((dialog) => {
            return (
              <Dialogs name={dialog.name} key={dialog.id} id={dialog.id} />
            );
          })}
        </div>
        <div className={styles.messages}>
          {props.state.messagesData.map((mess) => {
            return <Message message={mess.message} key={mess.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Messages;
