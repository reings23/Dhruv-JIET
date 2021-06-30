import React, {useState, useEffect} from 'react'

const Home = () => {
  const [userData, setUserData] = useState({id:"", title:"", body:""});
    
  const userContact = async () => {
      try {
          const res = await fetch('/data', {
              method: "GET",
              headers: {
                  "Content-Type": "application/json"
              },
          });

          const data = await res.json();
          console.log(data);
          setUserData({...userData, id:data.id, title:data.title, body:data.body });

          if (!res.status === 200) {
              const error = new Error(res.error);
              throw error;
          }

      } catch (err) {
          console.log(err);
      }
  }

  useEffect(() => {
      userContact();
  }, []);
    return (
        <>
            <div className="home-page">
                <div className="home-div">
                    <p className="pt-5">WELCOME</p>
                    <h1>{userData.id}</h1>
                    
                </div>
            </div>
            
        </>
    )
}

export default Home