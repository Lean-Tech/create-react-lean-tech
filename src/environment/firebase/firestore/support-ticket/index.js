import moment from 'moment'
import { firebaseApp } from "../..";

const db = firebaseApp.firestore();

export function sendSupportTicket(ticketSubject, ticketMessage) {

  const id = moment().format('MM-DD-YYYY');
  const datetime = new Date();
  const docRef = db.collection('support-tickets').doc(id);
  const userId = window.localStorage.getItem('user');
  const ticket = {
      subject: ticketSubject,
      message: ticketMessage,
      time: datetime
  };
  let todayUserTickets = [];

  return db.runTransaction(async transaction => {
      return transaction.get(docRef).then(doc => {
        if (doc.exists && doc.data()[userId]) {
            todayUserTickets = doc.data()[userId];
        };
        todayUserTickets.push(ticket);
        try {
          transaction.set(
            docRef,
            {
              [userId]: todayUserTickets
            },
            { merge: true }
          );
        } catch (err) {
          console.error('Error: ', `${err}`);
        };
      }).catch((err) => {
        console.error('Error: ', `${err}`);
      });
    }).catch((err) => {
      console.error('Error: ', `${err}`);
      });
};

