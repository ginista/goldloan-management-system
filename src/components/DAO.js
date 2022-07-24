import { useEffect, useState } from "react";
import firebase from "../firebase";
import { useUserDetailsContext } from "../context/LoanApplyContext";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  where,
  query,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  setDoc,
  getDoc,
} from "firebase/firestore";

const customersCollectionRef = collection(db, "User1");

class DAO {

  addusers = (newUsers) => {
    return addDoc(customersCollectionRef, newUsers);
  };

  updateBook = (id, updatedBook) => {
    const bookDoc = doc(db, "users", id);
    return updateDoc(bookDoc, updatedBook);
  };

  deleteBook = (id) => {
    const bookDoc = doc(db, "users", id);
    return deleteDoc(bookDoc);
  };

  getAllusers = () => {
    return getDocs(customersCollectionRef);
  };

  getBook = (id) => {
    const bookDoc = doc(db, "User3", id);
    return getDocs(bookDoc);
  };
  getCustomerDataUsingLoadId = async (loanCheck, adddbDetails) => {

    const q = query(collection(db, "User1"), where("Loanno", "==", loanCheck));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log('No matching documents.');
      return;
    }

    return querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      adddbDetails(doc.data());
      return doc.data();
    });

  };

  getCustomerDataUsingMobileNo = async (mobileNo, adddbDetails) => {

    const q = query(collection(db, "User1"), where("mobileNumber", "==", mobileNo));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log('No matching documents.');
      return;
    }

    return querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      adddbDetails(doc.data());
      return doc.data();
    });

  }
}

export default new DAO();
