import myAnimation from '../gif/myAnimation.gif';
import { useEffect, useState } from 'react';

const Home = () => {
  const [color, setColor] = useState('red');

  useEffect(() => {
    const colors = [
      'red', 'blue', 'green', 'yellow', 'purple',
      'orange', 'pink', 'cyan', 'magenta', 'lime',
      'brown', 'teal', 'navy', 'violet', 'gold',
      'silver', 'black', 'indigo', 'coral'
    ];  
    let index = 0;

    const interval = setInterval(() => {
      setColor(colors[index]);
      index = (index + 1) % colors.length;
    }, 300); 

    return () => clearInterval(interval);   
  }, []);

  return (
    <>
      <div>
        <div>😘😜😘😜😝😂🤣😍🤣😜😝😂😜😝😂😜😝😉😎😄🥰🤩🤗🤗😚😘😜😝😂🤣😍🤣🥰🤩🤗🤗😚😘😜😝😂🤣😍🤣😉😎😄🥰🤩🤗🤗😚</div>


        <h1>
        <span style={{ color: color, display: "inline-flex", alignItems: "center", gap: "8px" }}>
        <img src={myAnimation} alt="My Animation" style={{ width: "30px", height: "30px" }} />
        שלום הגעת לדף הבית של האתר המטורף שלנו
        <img src={myAnimation} alt="My Animation" style={{ width: "30px", height: "30px" }} />
      </span>        </h1>

        <div>😘😜😘😜😝😂😜😝😂😜😝😂😜😝🤣😍🤣😉😎😄🥰🤩🤗🤗😚😘😜😝😂🤣😍🤣🥰🤩🤗🤗😚😘😜😝😂🤣😍🤣😉😎😄🥰🤩🤗🤗😚</div>
      </div>
    </>
  );



}

export default Home;




