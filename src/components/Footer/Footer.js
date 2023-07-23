import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "../CustomButton";

export default function Footer(params) {
    const buttonsData = [
        { label: 'Privacy Policy', link: 'https://www.mazadak.com/privacy-policy/' },
        { label: 'Terms of Use', link: 'https://www.mazadak.com/terms-of-use/' },
        { label: 'Terms & Conditions', link: 'https://www.mazadak.com/terms-conditions/' },
    ]
    const socialMedia = [
        { src: '/imgs/mazadakFooter/ig.svg', link: 'https://www.instagram.com/mazadakonline/' },
        { src: '/imgs/mazadakFooter/sc.svg', link: 'https://www.snapchat.com/add/mazadak.online' },
        { src: '/imgs/mazadakFooter/tt.svg', link: 'https://www.tiktok.com/@mazadakonline' },
        { src: '/imgs/mazadakFooter/tw.svg', link: 'https://twitter.com/mazadakonline1' },
        { src: '/imgs/mazadakFooter/yt.svg', link: 'https://www.youtube.com/c/Mazadakonline' },
    ]
    return (
        <Box sx={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: {md: '100px',sm:'200px', xs: '300px'},
        }}>
            <Divider color='#00F0A9' />
            <Grid item position={'relative'} bottom={0} height={'10vh'} width={'100%'} padding={3}>
                <Grid container justifyContent={{ sm: 'center', md: 'space-between' }} alignItems={'center'} flexDirection={{ xs: 'column', md: 'row' }}>
                    <Grid item display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <Box sx={{ display: 'flex', alignItems: 'end', flexGrow: 1, marginRight: 2 }}>
                            <Link href="/">
                                <Image
                                    src="/imgs/logo1.png"
                                    width={40}
                                    height={25}
                                    alt="Mazadak"
                                />
                            </Link>
                        </Box>
                        <Typography fontSize={'12px'} fontWeight={600}>© 2022 Mazadak | All Rights Reserved</Typography>

                    </Grid>
                    <Grid item>
                        <Grid container alignItems={'center'} flexDirection={{ xs: 'column', sm: 'row', md: 'row' }}>
                            {
                                buttonsData.map((btn, i) =>
                                    <Grid item textAlign={'center'} key={i}>
                                        <Link href={btn.link} target="_blank" key={i} style={{ textDecoration: 'none' }}>
                                            <CustomButton
                                                color={'primary'}
                                                label={btn.label}
                                                sx={{
                                                    border: 'none',
                                                    borderRadius: 0,
                                                    fontWeight: 700,
                                                    marginRight: 2,
                                                    ":hover": { border: 'none' },
                                                    fontSize: 12,
                                                    fontWeight: 500,
                                                    color: 'white',
                                                    textDecoration: 'none'
                                                }}
                                            />
                                        </Link>
                                    </Grid>
                                )
                            }
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={1}>
                            {
                                socialMedia.map((icon, i) =>
                                    <Grid item key={i}>
                                        <Link href={icon.link} target="_blank">
                                            <Fab key={i}
                                                size="small"
                                                sx={{
                                                    width: 30,
                                                    height: 15,
                                                    minHeight: 30,
                                                    marginRight: 1,
                                                    border: 'none'
                                                }}
                                                color="primary"
                                                aria-label="add"
                                            >
                                                <Image
                                                    src={icon.src}
                                                    width={15}
                                                    height={15}
                                                    alt="Mazadak"
                                                />
                                            </Fab>
                                        </Link>
                                    </Grid>
                                )
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>

    )
}
