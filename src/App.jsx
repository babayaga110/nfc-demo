import * as React from "react";
import { db_firestore } from "./firebase/config";
import { collection, onSnapshot } from "firebase/firestore";
import Marquee from "react-fast-marquee";
import Template from "./Template";
import { Player } from "@lottiefiles/react-lottie-player";
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
    <div style={{ height: "100vh" }}>
      <div className="flex justify-content-center align-items-center w-full h-[calc(100vh-50px)]">
        <div
          className={`relative basis-3/4  border-t-[10px] border-b-[10px] ${
            data?.available ? "border-green-500" : "border-red-600"
          }`}
        >
          <div className="absolute -top-[70px] right-0  text-white w-fit h-fit font-bold z-10">
            <Player
              autoplay={true}
              loop={true}
              controls={false}
              src={data?.available ? "/unavailable.json" : "/available.json"}
              style={{ height: "250px", width: "250px" ,padding:0 }}
            />
          </div>
          {/* <img
          className="w-full h-full object-contain"
          src="https://firebasestorage.googleapis.com/v0/b/nfc-demo-d3f3b.firebasestorage.app/o/2022-11-27.jpg?alt=media&token=9e293a52-de74-4584-ba33-a4a34ccb189d"
          alt="placeholder"
        /> */}
          <Template doctor={data} />
        </div>
        <div className="basis-1/4">
          <img
            className="w-full h-full object-cover"
            src={data?.gif || "http://via.placeholder.com/400x360"}
            alt="placeholder"
          />
        </div>
      </div>
      <div className="bg-[#F5EDED] w-full h-[50px]  flex items-center">
        <Marquee>
          <p className="text-2xl font-bold text-gray-800 uppercase ">
            Welcome to Dr. Soliman Fakeeh Hospital
          </p>
        </Marquee>
      </div>
    </div>
  );
}
