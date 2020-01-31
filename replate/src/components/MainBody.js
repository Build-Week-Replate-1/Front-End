import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const MainBody = () => {
    return (
        <div>
            <React.Fragment>
                <CssBaseline/>
                <Container maxWidth="md">
                    <Typography component="div" style={{ backgroundColor: "lightblue", height: "100vh" }}/>
                </Container>
            </React.Fragment>
        </div>
    );
};

export default MainBody;
