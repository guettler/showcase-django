import type {GetServerSideProps, NextPage} from 'next'
import styles from '../styles/Home.module.css'
import {Button, Divider, Icon, IconButton, ImageList, ImageListItem, Paper, Typography} from "@mui/material";
import {height} from "@mui/system";
import Photo from '@mui/icons-material/Photo';
import Search from '@mui/icons-material/Search';
import {useEffect, useState} from "react";


const Home: NextPage = (props, context) => {

    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('/api/v1/images/descriptions')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    return (
        <div className={styles.container}>
            <Paper
                sx={{
                    minHeight: '84vH',
                    minWidth: '100%',
                    height: '600px',
                    backgroundImage: 'linear-gradient(to right, #11281D ,' +
                        ' #21372A)',
                    color: '#D5D8D3',
                    padding: '3%'
                }}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Photo sx={{fontSize: '80px'}}/>
                    <Typography variant="h3">
                        Secure Image Uploads
                    </Typography>
                    <IconButton>
                        <Search fontSize={"large"} sx={{color: '#D5D8D3'}}/>
                    </IconButton>
                </div>
                <Divider sx={{backgroundColor: '#4D5A51'}}/>
                <ImageList sx={{height: '90%'}} cols={3} gap={8} variant="quilted">
                    {data.map((item) => (
                        <ImageListItem key={item.img} sx={{height: '50px'}}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Paper>
        </div>
    )
}

export default Home
