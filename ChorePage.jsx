import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";

const ChorePage = () => {
    const [authUser, setAuthUser] = useState(null);
  
    useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
        if (user) {
          setAuthUser(user);
        } else {
          setAuthUser(null);
        }
      });
  
      return () => {
        listen();
      };
    }, []);

const Next = () => {
    signOut(auth)
      .then(() => {
        console.log("no next page for you");
      })
      .catch((error) => console.log(error));
  };

return (
    <div>
      {authUser ? (
        <>
          <p>{`Signed In as ${authUser.email}`}</p>
          <button onClick={Next}> Next </button>
        </>
      ) : (
        <p> CHORES LOL</p>
      )}
    </div>
  );

}

export default ChorePage;