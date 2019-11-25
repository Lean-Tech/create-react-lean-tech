import moment from 'moment'
import { firebaseApp } from "../..";

const db = firebaseApp.firestore();

export function storeErrorLog(errorMessage, errorLocation) {

  const id = moment().format('MM-DD-YYYY');
  const datetime = new Date();
  const docRef = db.collection('error-log').doc(id);
  const userId = window.localStorage.getItem('user');
  const error = {
      err: errorMessage,
      url: errorLocation,
      time: datetime
  };
  let todayUserErrorLogs = [];

  return db.runTransaction(async transaction => {
      return transaction.get(docRef).then(doc => {
        if (doc.exists && doc.data()[userId]) {
          todayUserErrorLogs = doc.data()[userId];
        };
        todayUserErrorLogs.push(error);
        try {
          transaction.set(
            docRef,
            {
              [userId]: todayUserErrorLogs
            },
            { merge: true }
          );
        } catch (err) {
          console.error('Error: ', `${errorMessage} from ${errorLocation}`);
        };
      }).catch((err) => {
        console.error('Error: ', `${errorMessage} from ${errorLocation}`);
      });
    }).catch((err) => {
      console.error('Error: ', `${errorMessage} from ${errorLocation}`);
      });
};

