import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <>
      <footer>
        <Container sx={{ display: { md: "flex" } }}>
          <Grid container>
            <Grid item xs={12} md={4} sx={{alignSelf:'center'}}>
              <img
                width={150}
                height={150}
                src="https://imgs.search.brave.com/ISvhAcphv1TVbeWAxEsQw1ofwdqD_j_MmaxhSunu9b8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvYWRv/cmFibGUtYmFieS15/b2RhLTloYmgxeHQ0/eWs5bW5hNWouanBn"
                alt=""
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <a href="" style={{textDecoration:'none'}}>
                <h4>Sobre Nosotros</h4>
              </a>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Explicabo sunt dolores suscipit in nisi aperiam ad sequi facere
                corporis fugit?
              </p>
            </Grid>
            <Grid item xs={12} md={4}>
              <h4>Siguenos</h4>
              <a href="">
                <InstagramIcon />
              </a>
              <a href="">
                <FacebookIcon />
              </a>
              <a href="">
                <WhatsAppIcon />
              </a>
            </Grid>
            <Grid item xs={12}>
              <small>
                &copy; 2023 <b>Pequelandia - Todos los Derechos Reservados.</b>
              </small>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
