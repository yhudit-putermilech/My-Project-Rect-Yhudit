import pImage from '../images/p.jpg';
import bImage from '../images/b.jpg';
import kImage from '../images/k.jpg';
import { Typography, Box, Paper, Grid, Card, CardContent } from '@mui/material';
import EventNoteIcon from '@mui/icons-material/EventNote';
//מציג את רשימת הקורסים שלי
const Courses = () => {
  const courses = [
    { id: 1, title: 'קונדטוריה', image: kImage },
    { id: 2, title: 'עיצוב ברים', image: bImage },
    { id: 3, title: 'סידור פרות', image:pImage  },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, mt: 4 }}>
      {/* כותרת */}
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, textAlign: 'center', width: '80%', maxWidth: 800 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <EventNoteIcon sx={{ fontSize: 60, mb: 2 }} />
          <Typography variant="h3" fontWeight="bold">הקורסים שלנו</Typography>
        </Box>
      </Paper>

      {/* רשימת הקורסים */}
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
                backgroundImage: `url(${course.image})`, // תמונה שונה לכל כרטיס
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



































/*import { Typography, Box, Paper } from '@mui/material';
import { School as SchoolIcon } from '@mui/icons-material';

const Courses = () => {
  const courses = [
    { id: 1, title: 'קונדטוריה', image: '/api/placeholder/300/200' },
    { id: 2, title: 'עיצוב ברים', image: '/api/placeholder/300/200' },
    { id: 3, title: 'סידור פרות', image: '/api/placeholder/300/200' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          mb: 4
        }}>
          <SchoolIcon sx={{ fontSize: 60, color: 'primary.main' }} />
          <Typography variant="h2">הקורסים שלנו</Typography>
        </Box>

        <ul>
          {courses.map((course) => (
            <li key={course.id}>{course.title}</li>
          ))}
        </ul>
      </Paper>
    </Box>
  );
};

export default Courses;
*/
/*------------------------------------------------*/ 
/*import { Typography, Box, Paper, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { School as SchoolIcon } from '@mui/icons-material';

const Courses = () => {
  const courses = [
    { id: 1, title: 'קונדטוריה', image: '/api/placeholder/300/200' },
    { id: 2, title: 'עיצוב ברים', image: '/api/placeholder/300/200' },
    { id: 3, title: 'סידור פרות', image: '/api/placeholder/300/200' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, mt: 4 }}>
     
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, textAlign: 'center', width: '80%', maxWidth: 800 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <SchoolIcon sx={{ fontSize: 60, color: 'primary.main' }} />
          <Typography variant="h3" fontWeight="bold">הקורסים שלנו</Typography>
        </Box>
      </Paper>

     
      <Grid container spacing={3} justifyContent="center">
        {courses.map((course) => (
          <Grid item key={course.id} xs={12} sm={6} md={4}>
            <Card 
              sx={{ 
                maxWidth: 345, 
                borderRadius: 3, 
                boxShadow: 4,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': { transform: 'scale(1.05)' }
              }}
            >
              <CardMedia component="img" height="200" image={course.image} alt={course.title} />
              <CardContent>
                <Typography variant="h5" fontWeight="bold" align="center">{course.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Courses;
*/
/*--------------------------------------------------------------- */
/*
import { Typography, Box, Paper, Grid, Card, CardContent } from '@mui/material';
import { School as SchoolIcon } from '@mui/icons-material';
import background3 from '../images/background3.png';
const Courses = () => {
  const courses = [
    { id: 1, title: 'קונדטוריה' },
    { id: 2, title: 'עיצוב ברים' },
    { id: 3, title: 'סידור פרות' },
  ];

  const backgroundImage = '../images/background3'; // תמונה שתשמש כרקע לכל הכרטיסים

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, textAlign: 'center', width: '80%', maxWidth: 800 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <SchoolIcon sx={{ fontSize: 60, color: 'primary.main' }} />
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
                backgroundImage: `url(${backgroundImage})`, // תמונה כרקע
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white", // כדי שהטקסט יהיה ברור
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
*/

/**--------------------------------------------- */
/*
import { Typography, Box, Paper, Grid, Card, CardContent } from '@mui/material';
import EventNoteIcon from '@mui/icons-material/EventNote';
import background3 from '../images/background3.jpg'; // ייבוא התמונה

const Courses = () => {
  const courses = [
    { id: 1, title: 'קונדטוריה' },
    { id: 2, title: 'עיצוב ברים' },
    { id: 3, title: 'סידור פרות' },
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
                backgroundImage: `url(${background3})`, // שימוש בתמונה שהייבאת
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white", // כדי שהטקסט יהיה ברור
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
*/