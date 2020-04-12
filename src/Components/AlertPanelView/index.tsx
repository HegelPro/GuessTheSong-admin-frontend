import React from 'react'
import { List, ListItem, SnackbarContent, makeStyles, Box } from '@material-ui/core'
import { IAlert } from '../../models/alert'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'fixed',
    bottom: theme.spacing(2),
    left: 0,
    width: '100%',
  }
}))

const useSnackbarTypesStyles = makeStyles(theme => ({
  error: {
    background: theme.palette.error.main,
  },
  info: {
    background: theme.palette.error.dark,
  },
}))

interface Props {
  alerts: IAlert[]
}

export const AlertPanelView = ({alerts}: Props) => {
  const classes = useStyles()
  const classesSnackbarTypes = useSnackbarTypesStyles()
  return (
    <Box className={classes.root}>
      <List>
        {alerts.map((alert) => (
            <ListItem>
              <SnackbarContent classes={{root: classesSnackbarTypes[alert.type]}} message={alert.massage} />
            </ListItem>
          )
        )}
      </List>
    </Box>
  )
}