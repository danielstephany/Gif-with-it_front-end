import React from 'react';
import Grid from '@components/Grid';
import Paper from '@components/Paper';
import TextBox from '@components/TextBox';
import FormItem from '@components/FormItem';
import Button from '@components/Button';

const SignUp = (props) => {

    return (
        <Grid container vMargin="8">
            <Grid row>
                <Grid col xs="12" sm="6" offsetSm="3">
                    <Paper>
                        <h2>Sign Up</h2>
                        <Grid row spacing="0">
                            <Grid col xs="6">
                                <TextBox label="First Name" fullWidth />
                            </Grid>
                            <Grid col xs="6">
                                <TextBox label="Last Name" fullWidth />
                            </Grid>
                            <Grid col xs="6">
                                <TextBox label="User Name" fullWidth />
                            </Grid>
                            <Grid col xs="6">
                                <TextBox label="Email" fullWidth />
                            </Grid>
                            <Grid col xs="6">
                                <TextBox label="Password" fullWidth />
                            </Grid>
                            <Grid col xs="6">
                                <TextBox label="Re-enter Password" fullWidth />
                            </Grid>
                            <Grid col xs="12">
                                <FormItem alignItems="right" fullWidth>
                                    <Button>Submit</Button>
                                </FormItem>
                            </Grid>
                        </Grid>

                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SignUp;