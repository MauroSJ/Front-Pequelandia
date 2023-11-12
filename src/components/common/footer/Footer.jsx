import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <>
        <Container>
            <Grid container>
                <Grid item xs={12} md={8} lg={3}>
                    <img width={150} height={150} src="https://imgs.search.brave.com/ISvhAcphv1TVbeWAxEsQw1ofwdqD_j_MmaxhSunu9b8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvYWRv/cmFibGUtYmFieS15/b2RhLTloYmgxeHQ0/eWs5bW5hNWouanBn" alt="" />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} md={8} lg={3}>
                    <h4>Sobre Nosotros</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo sunt dolores suscipit in nisi aperiam ad sequi facere corporis fugit?</p>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} md={8} lg={3}>
                    <h4>Siguenos</h4>
                    <InstagramIcon/>
                    <FacebookIcon/>
                    <WhatsAppIcon/>
                </Grid>
            </Grid>
        </Container>
    </>
  );
};

export default Footer;
