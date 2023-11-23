import React from "react";
import { Card, CardContent, Grid } from "@mui/material";
// import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export const Albums = () => {
  const album = [
    {
      album: 'Thriller" by Michael Jackson (1982)',
    },
    {
      album: 'The Dark Side of the Moon" by Pink Floyd (1973)',
    },
    {
      album: 'Abbey Road" by The Beatles (1969)',
    },
    {
      album: 'Back in Black" by AC/DC (1980)',
    },
  ];
  return (
    <div>
      {album.map((item, index) => (
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: "1" }}
          sx={{ display: "flex" }}
        >
          <Grid xs="6">
            <Card variant="outlined">
              <CardContent key={index}>{item.album}</CardContent>
            </Card>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};
