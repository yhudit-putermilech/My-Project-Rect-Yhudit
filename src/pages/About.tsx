import { useEffect, useState } from 'react';

const About = () => {
    const [color, setColor] = useState('black');

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
        }, 500); 

        return () => clearInterval(interval);  
    }, []);

    return (
        <div style={{ textAlign: "center", padding: "20px" }}> 
            <h1 style={{ color: color, fontSize: "200px", fontWeight: "bold" }}>אודותינו 😉</h1>
        </div>
    );
}

export default About;