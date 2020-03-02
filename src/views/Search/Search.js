import React from 'react';
import Grid from '@components/Grid';
import ViewHeader from '@components/ViewHeader';

const Search = (props) => {

    return (
        <Grid container>
            <Grid row>
                <Grid col xs="12" sm="8" offsetSm="2">
                    <ViewHeader>search</ViewHeader>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Search;