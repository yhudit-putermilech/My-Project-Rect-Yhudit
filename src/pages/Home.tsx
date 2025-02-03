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
    ]; // מערך עם 20 צבעים
    let index = 0;

    const interval = setInterval(() => {
      setColor(colors[index]);
      index = (index + 1) % colors.length;
    }, 300); // משנים צבע כל שנייה

    return () => clearInterval(interval); // לנקות את ה-intervall כשקומפוננטה מתנתקת
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






















































//import { Typography, Box, Paper } from '@mui/material';
//import { Home as HomeIcon } from '@mui/icons-material';
/* 
const Home = () => {
  return (
    <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2
      }}>
        <HomeIcon sx={{ fontSize: 60, color: 'primary.main' }} />

        <div>😘😜😘🤩🤗😎🤗😚😘😜😝😂🤣😘😍🤣🥰🤩🤗🤗😚😘😜😝😂🤣😍🤣😉😎😄🥰🤩🤗🤗😚😝😂🤣😍🤣😉😎😄🥰🤩🤗🤗😚</div>
        <Typography variant="h1">ברוכים הבאים</Typography>
        <div>😘😜😘😉😎🤩🤗🤗😚😘😜😝😂🤣😍🤣🥰🤩🤗🤗😚😘😜😝😂🤣😍🤣😉😎😄🥰🤩🤗🤗😚😝😂🤣😍🤣😉😎😄🥰🤩🤗🤗😚</div>
      </Box>
    </Paper>
  );
};

export default Home;
*/