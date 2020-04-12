import React from 'react'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'

// import { Link } from '../Link'
import {AppBar, Toolbar, Typography, Link, Grid} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import {setToken} from '../../services/auth'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    link: {
      textDecoration: 'none',
    }
  }),
)

export const Navigation = () => {
  const classes = useStyles()
  const history = useHistory()
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container justify='space-between' alignItems='center'>
            <Grid item>
              <Typography variant="h6" className={classes.title}>
                News
              </Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={1}>
                <Grid item>
                  <Link onClick={() => history.push('/songs/create')} color='textPrimary'>Create Song</Link>
                </Grid>
                <Grid item>
                  <Link onClick={() => history.push('/songs')} color='textPrimary'>Song List</Link>
                </Grid>
                <Grid item>
                  <Link onClick={setToken} color='textPrimary'>Login</Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}