import * as React from "react";
import { db_firestore } from "./firebase/config";
import { collection, onSnapshot } from "firebase/firestore";
import Marquee from "react-fast-marquee";
export default function App() {
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db_firestore, "demo"),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setData(data[0]);
        console.log(data[0]);
      }
    );
    return () => unsubscribe();
  }, []);

  return (
    <div
      className="flex justify-content-center align-items-center"
      style={{ height: "calc(100vh - 50px)" }}
    >
      <div className={["basis-3/4 border border-[5px]" , data?.available ? "border-green-500": "bottom-red-500"]}>
        <img
          className="w-full h-full object-contain"
          src={data?.nfcToken || "https://firebasestorage.googleapis.com/v0/b/nfc-demo-d3f3b.firebasestorage.app/o/2022-11-27.jpg?alt=media&token=9e293a52-de74-4584-ba33-a4a34ccb189d"}
          alt="placeholder"
        />
      </div>
      <div className="basis-1/4">
        <img
          className="w-full h-full object-cover"
          src={data?.gif || "http://via.placeholder.com/400x360"}
          alt="placeholder"
        />
      </div>
      <div className="bg-[#F5EDED] w-full h-[50px] fixed bottom-0 flex items-center">
        <Marquee>
          <p className="text-2xl font-bold text-gray-800">
            Welcome to Hospital
          </p>
        </Marquee>
      </div>
    </div>
  );
}
