import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './style'
import './App.css';



function App() {
  const classes = useStyles();
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="App">
      <div className={classes.pageMeasure}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <PhotoCamera className={classes.icon} />
            <Typography variant="h6"> Photo Album</Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div className={classes.container}>
            <Container maxWidth="sm">
              <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
                Photo Gallery
              </Typography>
              <Typography variant="h6" align="center" color="textSecondary" gutterBottom>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem praesentium debitis quibusdam velit assumenda, eaque recusandae harum eligendi eveniet rem itaque! Ullam voluptatum consectetur ipsam error nulla deleniti. Ipsa, vero.
              </Typography>
              <div>
                <Grid container spacing={2} justify="center" className={classes.button}>
                  <Grid item>
                    <Button variant="contained" color="primary">
                      See my photos
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Secondary Actions
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="lg">
            <Grid container spacing={4}>
              {
                cards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography variant="h5">
                          Heading
                      </Typography>
                        <Typography>
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum assumenda accusantium quam dignissimos natus, voluptate ipsam veniam beatae corporis rerum.
                      </Typography>
                      </CardContent>
                      <CardActions>
                        <Button variant="outlined" size="small" color="primary">View</Button>
                        <Button variant="contained" size="small" color="primary">Edit</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))
              }
            </Grid>
          </Container>
        </main>
        <footer className={classes.footer}>
            <Typography variant="h5" align="center" color="primary" gutterBottom>
                Footer
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, in?
            </Typography>
        </footer>
      </div>
    </div>
  );
}

export default App;
