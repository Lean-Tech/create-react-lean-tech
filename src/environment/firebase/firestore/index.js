import {firebaseApp} from '../index';

const firestore = firebaseApp.firestore();

export async function addItem(item, collectionName) {
    const testCollectionRef = firestore.collection(collectionName);
    return testCollectionRef.add(item);
}

export async function storeItem (item, collectionName, docId) {
    const testCollectionRef = firestore.collection(collectionName).doc(docId);
    return testCollectionRef.set(item);
}

export async function getCollection (collectionName) {
    const collection = await firestore.collection(collectionName).get()
    return collection.docs.map(doc => doc.data())
}

export async function getItem (collectionName, docId) {
    const collection = await firestore.collection(collectionName).doc(docId).get()
    return collection ? collection.data() : null
}

export async function deleteItem(collectionName, docId) {
    const collection = await firestore.collection(collectionName).doc(docId).delete();
    return collection ? collection : 'deteleted';
}

export async function  updateItem(collectionName, docId, newData) {
    const collection = await firestore.collection(collectionName).doc(docId);
    const response = await collection.update({
        descrption: newData.descrption,
        name: newData.name
    }).then(() => {
        return true;
    })
        .catch((error) => {
            return false;
        });
    return response;
}
