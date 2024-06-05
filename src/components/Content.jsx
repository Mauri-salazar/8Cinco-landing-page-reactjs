import React from 'react'
import {
    Grid,
    Typography,
    IconButton,
    Card,
    CardContent,
} from "@mui/material";
// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import EmergencyShareIcon from '@mui/icons-material/EmergencyShare';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
// components
import Title from './Title'
import Paragraph from './Paragraph'


const Content = () => {
    return (
        <Grid container spacing={0}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                py: 10,
                px: 2,
            }}
        >
            <Grid item xs={12} sm={12} md={5}
                component='section'
            >
                <Title
                    text={
                        'Que te ofrecemos?'
                    }
                    textAlign={'start'}
                />

                <Typography
                    variant='h6'
                    component='h4'
                    sx={{
                        fontWeight: '400',
                        paddingTop: 1,
                    }}
                >
                    Tráfico & Performance para tu negocio.                  
                </Typography>

                <Paragraph
                    text={
                        ' Trabajamos para brindarte un\
                        crecimiento progresivo\
                        de tus ventas a traves de tu e-commerces y local físico.'
                    }
                    maxWidth={'75%'}
                    mx={0}
                    textAlign={'start'}
                />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Card
                    square={true}
                    sx={{
                        minHeight: 200,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        border: '1px solid #ccc',
                    }}>
                    <CardContent>
                        <IconButton>
                            <FacebookIcon
                                fontSize="large"
                                color="primary" />
                        </IconButton>
                        <Typography
                            variant="h5"
                            component="p"
                            sx={{
                                fontWeight: 700,
                                textTransform: 'capitalize',
                            }}
                        >
                            Facebook Meta Ads
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Card
                    square={true}
                    sx={{
                        minHeight: 200,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        border: '1px solid #ccc'
                    }}>
                    <CardContent>
                        <IconButton>
                            <GoogleIcon
                                fontSize="large"
                                />
                        </IconButton>
                        <Typography
                            variant="h5"
                            component="p"
                            sx={{
                                fontWeight: 700,
                                textTransform: 'capitalize',
                            }}
                        >
                            Google Ads  
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={2}
                sx={{
                    display: { xs: 'none', sm: 'block' },
                }}
            >
                <Card
                    square={true}
                    sx={{
                        boxShadow: 'none',
                        minHeight: 180,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}>
                    <CardContent>
                        <ArrowCircleRightRoundedIcon
                            fontSize="large"
                        />
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Card
                    square={true}
                    sx={{
                        minHeight: 200,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        border: '1px solid #ccc'
                    }}>
                    <CardContent>
                        <IconButton>
                            <AnalyticsIcon
                                fontSize="large"
                                color='success'
                            />
                        </IconButton>
                        <Typography
                            variant="h5"
                            component="p"
                            sx={{
                                fontWeight: 700,
                                textTransform: 'capitalize',
                            }}
                        >
                            Análisis de campañas
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Card
                    square={true}
                    sx={{
                        minHeight: 200,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        border: '1px solid #ccc',
                    }}
                >
                    <CardContent>
                        <IconButton>
                            <EmergencyShareIcon
                                fontSize="large"
                                color="primary" />
                        </IconButton>
                        <Typography
                            variant="h5"
                            component="p"
                            sx={{
                                fontWeight: 700,
                                textTransform: 'capitalize',
                            }}
                        >
                            Reconocimiento de Marca
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Card
                    square={true}
                    sx={{
                        minHeight: 200,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        border: '1px solid #ccc',
                    }}>
                    <CardContent>
                        <IconButton>
                            <AddBusinessIcon
                                fontSize="large"
                                color='success'
                            />
                        </IconButton>
                        <Typography
                            variant="h5"
                            component="p"
                            sx={{
                                fontWeight: 700,
                                textTransform: 'capitalize',
                            }}
                        >
                            Aumento de ventas
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Content