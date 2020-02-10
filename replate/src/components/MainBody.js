import React from 'react';
import {CssBaseline, Typography, Container, Card, CardActions, CardContent, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    cardLeft: {
        maxWidth: 650,
        marginBottom: 30,
        boxShadow: 'none',
    },
    cardRight: {
        maxWidth: 650,
        marginBottom: 30,
        marginLeft: 250,
        boxShadow: 'none',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    headings: {
        color: "#01FF70",
        fontFamily: "Bebas Neue",
        fontSize: "2.5em",
    },
    headingsRight: {
        color: "#01FF70",
        fontFamily: "Bebas Neue",
        fontSize: "2.5em",
        marginLeft: 395,
    },
    buttonSpecs: {
        backgroundColor: "#01FF70",
        color: "white",
        "&:hover": {
            backgroundColor: "white",
            color: "#01FF70",
            border: "1px solid #01FF70",
        }
    },
    buttonSpecsRight: {
        backgroundColor: "#01FF70",
        color: "white",
        marginLeft: 540,
        "&:hover": {
            backgroundColor: "white",
            color: "#01FF70",
            border: "1px solid #01FF70",
        }
    },
    textRight: {
        marginLeft: 20,
        textAlign: 'right',
    }
});

const MainBody = () => {
    const classes = useStyles();

    return (
        <div>
            <React.Fragment>
                <CssBaseline/>
                <Container maxWidth="md">
                    <Typography component="div" style={{ backgroundColor: "white", height: "110vh" }}>
                        <Card className={classes.cardLeft}>
                            <CardContent>
                                <Typography className={classes.headings}>
                                    About
                                </Typography>
                                <Typography>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book.
                                </Typography>
                            </CardContent>
                        </Card>


                        <Card className={classes.cardRight}>
                            <CardContent>
                                <Typography className={classes.headingsRight}>
                                    For Non-Profits
                                </Typography>
                                <Typography className={classes.textRight}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button className={classes.buttonSpecsRight} size="large" href="VolunteerRegister">Sign Up</Button>
                            </CardActions>
                        </Card>


                        <Card className={classes.cardLeft}>
                            <CardContent>
                                <Typography className={classes.headings}>
                                    For Business Owners
                                </Typography>
                                <Typography>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button className={classes.buttonSpecs} size="large" href="BusinessRegister">Sign Up</Button>
                            </CardActions>
                        </Card>

                    </Typography>
                </Container>
            </React.Fragment>
        </div>
    );
};

export default MainBody;
