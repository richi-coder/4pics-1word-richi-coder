import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, setDoc, doc, orderBy, query, getDoc } from "firebase/firestore";
import { setGameCondition } from "../reducers/Dashboard";
import { createPuzzle } from "../reducers/Puzzle";
import store from "../reducers/store";
import storage from "./localStorage"
import jsonChallenge from "./challenges.json"

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



const loadChallenges = async () => {
    const challengesCollection = collection(db, "level-1")
    const querySnapshot =  await getDocs(query(challengesCollection, orderBy("level", "asc")));
    let challengesLength = querySnapshot.docs.length

    let challengeStore = [];

    querySnapshot.forEach((doc) => {
        challengeStore.push(doc.data())
            if (challengeStore.length == challengesLength) {
                let gameData = {
                    level: 0,
                    coins: 0,
                    data: true
                }
                storage.setItem("challenges", JSON.stringify(challengeStore))
                storage.setItem("gameData", JSON.stringify(gameData))
                store.dispatch(setGameCondition("starting"))
            }
        }
    )
}

// BOTH FUNCTIONS TO UPLOAD CHALLENGES TO FIREBASE

// Second here
const uploadToFirebase = async(element) => {
    await setDoc(doc(db, "level-1", `number-${element.level}`), element)
    console.log(element.level, "WORKING!")
}


// First here (this function will be used for uploading from StartButton.jsx)
const uploadChallenges = () => {
    jsonChallenge.challenges.forEach(element => {
        uploadToFirebase(element)
    })
}



// // Reading challenges
// const loadChallenges = () => {


//     // return {
//     //     number: 99999,
//     //     imageURL: ["https://www.scrabblewordsolver.com/storage/cheats/lotum/images/_479_2.jpg", "https://www.scrabblewordsolver.com/storage/cheats/lotum/images/_479_1.jpg", "https://www.scrabblewordsolver.com/storage/cheats/lotum/images/_479_4.jpg", "https://www.scrabblewordsolver.com/storage/cheats/lotum/images/_479_3.jpg"],
//     //     answer: "WORKS",
//     //     puzzleString: "WORKS",
//     //     puzzle: []
//     // }
//     const test = queryChallenges()
//     return test
// }


export default {
    loadChallenges,
    uploadChallenges
}