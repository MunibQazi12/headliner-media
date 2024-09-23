import { articals } from '@/json/mock/cartAboutList.mock'
import { MoreResourcesStyled } from '@/styles/StyledComponents/MoreResourcesStyled'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MoreResourcesCard from './MoreResourcesCard'

function MoreResources() {
    return (
        <MoreResourcesStyled>
            <Box className="container">
                <Box>
                    <Typography className='mainHeading' variant="h2">
                        More Resources
                    </Typography>
                </Box>
                <Box className="cardContainer">

                    {articals.slice(0, 3).map((item) => (
                        <Grid sx={{ width: '30%', borderRadius: '4px' }} item lg={3} key={item.linkPath}>
                            <MoreResourcesCard
                                linkPath={item.linkPath}
                                imgPath={item.imgPath}
                                textMain={item.textMain}
                            />
                        </Grid>
                    ))}

                </Box>
                <Box className='btnContainer' >
                    <Button className='btn' variant='contained'>See More Resources</Button>
                </Box>
            </Box>

        </MoreResourcesStyled>
    )
}

export default MoreResources