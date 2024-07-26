import { Container, Grid } from "@mui/material";
import Authors from "../Authors/Authors";
import Blogs from "../Blogs/Blogs";
const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <p className="font-bold text-xl">نویسنده ها</p>
          <Authors />
        </Grid>
        <Grid item xs={12} md={9}>
          <p className="font-bold text-xl"> مقالات</p>
          <Blogs />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
