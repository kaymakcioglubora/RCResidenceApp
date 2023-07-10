import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { FIREBASE_AUTH, FIRESTORE_DB } from "../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";


const auth = FIREBASE_AUTH;
const db = FIRESTORE_DB;

const email_identifier = "@rcresidence.app"


{/* 
    Sign In Command 
*/}


const signIn = async(username, password) => {

    var response = null;

    try {
        
        // Try signing in
        response = await signInWithEmailAndPassword(auth, username + email_identifier, password);
        
        // Check if the user is configured in Cloud Firestore
        checkIfUserConfigExists(response.user, username, password);

    } catch(error) {
        console.log(error);
        alert(error);
    }

    return response;
}

{/* 
    Gets user type
*/}

const getUserType = (username) => {

    if (Number.isNaN(username.slice(-1))) {
        return "parent"
    } else {
        return "student"
    }
}

{/* 
    Checks if the user exists and configured in database
*/}

const checkIfUserConfigExists = async(user, username, password) => {
    try {
        var checkRef = doc(db, "users", user.uid);
        var checkSnap = await getDoc(checkRef);
  
        if (!checkSnap.exists()) {
            var newRef = doc(db, "users", user.uid);
            setDoc(newRef, {
                user: user.email,
                password: password,
                type: getUserType(username),
                residential_status: "7-day"
            });

            if(getUserType)
            setDoc(doc(db, "weekend_forms", user.uid), {forms: []});
            setDoc(doc(db, "out_of_residence_forms", user.uid), {forms: []});
            setDoc(doc(db, "in_residence_forms", user.uid), {forms: []})
        } 

    } catch(error) {
        console.log(error);
    }
    
}


export default signIn;