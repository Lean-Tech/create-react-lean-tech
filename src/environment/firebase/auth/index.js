import {firebaseApp} from "../index";

const auth = firebaseApp.auth();

const socialMediaProvider = {
    FACEBOOK: new firebaseApp.auth.FacebookAuthProvider(),
    GOOGLE: new firebaseApp.auth.GoogleAuthProvider(),
    MICROSOFT: new firebaseApp.auth.OAuthProvider('microsoft.com'),
};

export const singInWithSocialMedia = provider => {

    return (socialMediaProvider[provider])
        ? auth.signInWithPopup(socialMediaProvider[provider])
        : new Error('provider is not available');

};

export const singInEmailAndPassword = ({email, password}) => auth.signInWithEmailAndPassword(email, password);

export const singOut = () => auth.signOut()
