import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactTextCollapse from 'react-text-collapse';
import './test.css';
import clsx from 'clsx';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
  Box
} from '@material-ui/core/';
import { green, red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  header:{
    minHeight:170,
    minWidth:100,
    fontWeight:"bold",
    fontStyle:red[500]
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  h3: {
    backgroundColor: green[500]
  },
  card: {
    paddingBottom: 10,
    border: 10,
    marginBottom:10,
  }
}));

export function RecipeReviewCard(props) {
  debugger;
  const classes = useStyles();
  const projects = props.data;
  const [expanded, setExpanded] = React.useState(false);
  const TEXT_COLLAPSE_OPTIONS = {
    collapse: true, // default state when component rendered
    collapseText: '                                                read more', // text to show when collapsed
    expandText: 'show less', // text to show when expanded
    minHeight: 100, // component height when closed
    maxHeight: 250, // expanded to
    textStyle: { // pass the css for the collapseText and expandText here
      color: "blue",
    }
  }
  const TEXT_COLLAPSE_OPTIONS_forProjectName = {
    collapse: true, // default state when component rendered
    collapseText: 'read more', // text to show when collapsed
    expandText: 'show less', // text to show when expanded
    minHeight: 150, // component height when closed
    maxHeight: 250, // expanded to
    textStyle: { // pass the css for the collapseText and expandText here
      color: "blue",
    }
  }


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="strech"
        paddingBottom="10"
        className={"main"}
      >
        {
          projects.map((value) =>
            
              <Grid xs={12} sm={6} md={4} spacing={2} classes={classes.card} style={{marginBottom:"10px;"}} className={"Card"}>
                <Box width="95%" height="75%" >
                <Card variant="outlined" >
                  <Grid classes={classes.header} style={{"font-weight":"Bold",color:"green"}}> 
                  <span>{value.humber_name}</span>
                  </Grid>
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>{'Description:' + value.humber_projectdescription}</ReactTextCollapse>
                    </Typography>
                  </CardContent>
                </Card>
                </Box>
              </Grid>
          )
        }
      </Grid>
    </div>

  );
}
