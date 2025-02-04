import pImage from '../images/p.jpg';
import bImage from '../images/b.jpg';
import kImage from '../images/k.jpg';
import { Typography, Box, Paper, Grid, Card, CardContent } from '@mui/material';
import EventNoteIcon from '@mui/icons-material/EventNote';
const Courses = () => {
  const courses = [
    { id: 1, title: 'קונדטוריה', image: kImage },
    { id: 2, title: 'עיצוב ברים', image: bImage },
    { id: 3, title: 'סידור פרות', image:pImage  },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, textAlign: 'center', width: '80%', maxWidth: 800 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <EventNoteIcon sx={{ fontSize: 60, mb: 2 }} />
          <Typography variant="h3" fontWeight="bold">הקורסים שלנו</Typography>
        </Box>
      </Paper>
      <Grid container spacing={3} justifyContent="center">
        {courses.map((course) => (
          <Grid item key={course.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                maxWidth: 345,
                height: 200,
                borderRadius: 3,
                boxShadow: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                backgroundImage: `url(${course.image})`, 
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
                fontWeight: "bold",
                transition: 'transform 0.3s ease-in-out',
                '&:hover': { transform: 'scale(1.05)' }
              }}
            >
              <CardContent>
                <Typography variant="h5">{course.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Courses;
