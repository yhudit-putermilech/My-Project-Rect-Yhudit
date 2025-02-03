import { useEffect, useState } from 'react';

const About = () => {
    const [color, setColor] = useState('black');

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
        }, 500); // שינוי צבע כל חצי שנייה

        return () => clearInterval(interval); // ניקוי ה-interval כשקומפוננטה מתנתקת
    }, []);

    return (
        <div style={{ textAlign: "center", padding: "20px" }}> 
            <h1 style={{ color: color, fontSize: "200px", fontWeight: "bold" }}>אודותינו 😉</h1>
        </div>
    );
}

export default About;




























/*import { Typography, Box, Paper } from '@mui/material';
import { Info as InfoIcon } from '@mui/icons-material';

const About = () => {
  return (
    <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2
      }}>
        <InfoIcon sx={{ fontSize: 60, color: 'primary.main' }} />
        <Typography variant="h2">אודות האתר שלנו</Typography>
      </Box>
    </Paper>
  );
};

export default About;
*/

