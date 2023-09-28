"use client";
import "./page.scss";
import { InvestmentTable } from "./investmentTable";
import { FormEvent, useEffect, useState } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "@/firebase";
import { UserAuth } from "@/context/Auth";

export default function UserInvestment() {
  const { user } = UserAuth();
  const [tableData, setTableData] = useState([]);
  const [formData, setFormData] = useState({
    amount: 0,
  });


  useEffect(() => {
    const q = query(
      collection(db, "investment")
    );

    if(user){
      (async () => {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(doc =>{
          setTableData(formData, doc.data())  
        })
      })();
    }
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const hundleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "investment"), {
        user: user.uid,
        amount: eval(formData.amount),
        duration: 7,
        date: serverTimestamp(),
      });
      document.getElementById("myDailog")?.close();
      console.log("Document written with ID: ", docRef.id);
      console.log(docRef);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Investment</h1>

      <InvestmentTable data={tableData} />

      <dialog id="myDailog">
        <h4>Start Investing</h4>
        <p>You can invest any amount above $100</p>
        <form onSubmit={hundleSubmit}>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
          <div>
            <button formMethod="dialog">Cancel</button>
            <button
              style={{ background: "var(--primary-color)" }}
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </dialog>

      <button
        className="user_invest"
        onClick={() => {
          document.getElementById("myDailog")?.showModal();
        }}
      >
        Invest
      </button>
    </>
  );
}
