import React from 'react';

//Material ui core comps
import { makeStyles, TableBody, Table, TableRow, TableCell, Checkbox, Tooltip, IconButton } from '@material-ui/core';
import styles from '../../assets/jss/sqedulize/components/tasksStyle';

// @material-ui/icons
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
import Done from "@material-ui/icons/Done";

const useStyles = makeStyles(styles);
const Tasks = props => {
    const classes = useStyles();
    return (
        <Table className={classes.table}>
            <TableBody>
                {props.tasks.map((task, index) => (
                    <TableRow key={index} className={classes.tableRow}>
                        {!props.done ? <TableCell className={classes.tableCell}>
                            <Checkbox 
                                checked={task.checked}
                                tabIndex={-1}
                                classes={{
                                checked: classes.checked,
                                root: classes.root
                                }}
                                checkedIcon={<Check className={classes.checkedIcon}/>}
                                icon={<Check className={classes.uncheckedIcon}/>}
                            />
                        </TableCell> : <Done color="success" style={{display: 'inline-block', color: 'green'}}/>}
                        <TableCell className={classes.tableCell}>{task.text}</TableCell>
                        <TableCell className={classes.tableCell}>
                            {!props.done ? <Tooltip
                                id="tooltip-top"
                                title="Edit Task"
                                placement="top"
                                classes={{tooltip: classes.tooltip}}
                            >
                                <IconButton
                                    aria-label="Edit"
                                    className={classes.tableActionButton}
                                >
                                    <Edit 
                                        className={
                                            classes.tableActionButtonIcon + " " + classes.edit
                                        }
                                    />
                                </IconButton>
                            </Tooltip> : null}
                            <Tooltip
                                id="tooltip-top-start"
                                title="Remove"
                                placement="top"
                                classes={{ tooltip: classes.tooltip }}
                            >
                                <IconButton
                                    aria-label="Close"
                                    className={classes.tableActionButton}
                                >
                                    <Close 
                                        className={
                                        classes.tableActionButtonIcon + " " + classes.close
                                        }
                                    />
                                </IconButton>
                            </Tooltip>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default Tasks;