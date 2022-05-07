import React, { useEffect, useState } from "react";
import axios from "axios";
import { Chip, Grid, Rating, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from '@mui/material/Container';
import { Box } from "@mui/system";
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';

// import logo from './logo.svg'

/*
const test_posts = [

    {
     title: "한글도 되나요",
     excerpt: "ოყენები⠙⠑⠲⡃⠥UTF-8 TEST⠞∮⋅→∞∑∏∀x∈ℝ",
     image: "https://media.vlpt.us/images/oneook/post/748ba38f-e953-4124-acec-72c42dc7d026/ezgif-7-c16ba6bc2e63.gif",
     tags: ['sort', 'dp'],
     rate: 5
    },
   
    {
     title: "Style 주기 귀찮다",
     excerpt: "내용이 너무 길어지면 옆이나 밑으로 쭉 이어나가는게 아니라 ...으로 짤리도록 수정하렴",
     image: logo,
     tags: [],
     rate: 0.5
    },

    {
     title: "태그도 만들어주셈",
     excerpt: "밑에 height 엉성한거 고쳐라",
     image: "https://avatars.githubusercontent.com/u/77003554?v=4",
     tags: ['한글태그', '🥰이모지😊'],
     rate: 3.5
    },
   
    {
     title: "✨이모지도 잘나와요✨",
     excerpt: "login, markdown, pagination 추가해야 함",
     image: "https://avatars.githubusercontent.com/u/77003554?v=4",
     tags: ['태그길이가너무길면옆으로쭉가다가짤리는데', '이것도고쳐야댐'],
     rate: 3
    },
   
    {
     title: "움짤도 돌아감",
     excerpt: "내용 적으면 짧아지는거 수정함",
     image: "https://i.ppy.sh/398be0030d0ac56e953db93ce3884db1c5974a9f/68747470733a2f2f692e696d6775722e636f6d2f746d76517546742e676966",
     tags: ['binary-search', 'tree'],
     rate: 1.5
    },
   
    {
     title: "BOJ 9999번 - 구구",
     excerpt: "백준 6대 난제 대표 문제 (하지만 도움 안됨)",
     image: "https://thumbs.gfycat.com/LongFreshIrukandjijellyfish-size_restricted.gif",
     tags: ['dijkstra', 'kmp'],
     rate: 4.5
    }
]
*/

export default function Posts(props) {
  const [posts, setState] = useState([]);
  
  useEffect(() => {
    async function getMeta() {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/posts/all');
        setState(response.data)
        
      } catch (e) {
        console.error(e);
      }
    }
    getMeta();
  }, [])

  const tagClick = () => {
    alert("아직 작동 안함");
  };

  return (
    <div style={{ marginTop: 30, marginBottom: 30 }}>
      <Container maxWidth='xl'>  
        <Grid container spacing={6} sx={{justifyContent: 'center'}}>
          {posts.map(post => (
            <Grid item align='left' component='li' key={post.id} sx={{listStyle: 'none'}}>
              
              <Card sx={{ width: 380, height: 350}}>
                <CardActionArea sx={{ height: 275 }}>
                  <Link
                    component={RouterLink}
                    sx={{color: '#000000', textDecoration: 'none'}}
                    to={'/view/' + post.id}
                    state={post.id}
                  >
                    
                    <CardMedia
                      component="img"
                      alt="Something posted.."
                      height='180'
                      image={post.imageLink ? post.imageLink : "https://images.unsplash.com/photo-1572248525872-ac574b2bf06d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"}
                    />

                    <CardContent sx={{height:'100%'}}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {post.title}
                      </Typography>
                    </CardContent>
                  </Link>

                </CardActionArea>

                <CardActions sx={{height: 20}}>
                  <Stack direction="row" spacing={1}>
                    {post.tags.map(tag => (
                      <Chip label={tag} color="info" size="small" variant="outlined" onClick={tagClick} />
                    ))}
                  </Stack>
                </CardActions>
                <CardActions sx={{height: 20}}>
                  <Box sx={{flexGrow: 1}}>2022년 05월 26일</Box>
                  <Box>
                    <Rating name="half-rating-readonly" defaultValue={post.rate} precision={0.5} readOnly />
                  </Box>
                </CardActions>

              </Card>
            </Grid>
          ))}
        </Grid> 
      </Container>
    </div>
  );
}