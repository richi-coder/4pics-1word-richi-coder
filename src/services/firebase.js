import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_dDUSuO5JfclE0ErBVbaON7tSiwDw3pA",
  authDomain: "pics-1word-6a8f0.firebaseapp.com",
  projectId: "pics-1word-6a8f0",
  storageBucket: "pics-1word-6a8f0.appspot.com",
  messagingSenderId: "67111680110",
  appId: "1:67111680110:web:4c15a0dec6f8b324c34e7f",
  measurementId: "G-137FH0SC2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// Reading challenges
export const queryChallenges = async() => {


        // return {
        //     number: 99999,
        //     imageURL: ["https://www.scrabblewordsolver.com/storage/cheats/lotum/images/_479_2.jpg", "https://www.scrabblewordsolver.com/storage/cheats/lotum/images/_479_1.jpg", "https://www.scrabblewordsolver.com/storage/cheats/lotum/images/_479_4.jpg", "https://www.scrabblewordsolver.com/storage/cheats/lotum/images/_479_3.jpg"],
        //     answer: "WORKS",
        //     puzzleString: "WORKS",
        //     puzzle: []
        // }
        
    

    let querySnapshot =  await getDocs(collection(db, "level-1"));  
    let challengesLength = querySnapshot.docs.length

    let localStorage = [];

    querySnapshot.forEach((doc,i) => {
        localStorage.push(doc.data()) 
        console.log(i, challengesLength, "length")
        if (localStorage.length == challengesLength) {
            window.localStorage.setItem("fetch", "completed")
        }
    }

    )

}


