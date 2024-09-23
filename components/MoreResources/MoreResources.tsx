import { MoreResourcesStyled } from '@/styles/StyledComponents/MoreResourcesStyled'
import React from 'react'
import CommonHeading from '../CommonHeading/CommonHeading'
import { Box, Button, Grid, Typography } from '@mui/material'
import MoreResourcesCard from './MoreResourcesCard'
import { articals } from '@/json/mock/cartAboutList.mock'
import router from 'next/router'

function MoreResources() {
    const { slug }: { slug: string } = router.query;

    return (
        <MoreResourcesStyled>
            <Box className="container">
                <Box>
                    <Typography className='mainHeading' variant="h2">
                        More Resources
                    </Typography>
                </Box>
                <Box className="cardContainer">

                    {articals.slice(0, 3).map((item, index) => (
                        <Grid sx={{ width: '30%', borderRadius: '4px' }} item lg={3} key={index}>
                            <MoreResourcesCard
                                linkPath={item.linkPath}
                                imgPath={item.imgPath}
                                textMain={item.textMain}
                            />
                        </Grid>
                    ))}

                </Box>
                <Box  className='btnContainer' >
                    <Button className='btn' variant='contained'>See More Resources</Button>
                </Box>
            </Box>

        </MoreResourcesStyled>
    )
}

export default MoreResources