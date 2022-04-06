import React from "react";
import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

const posts = [

    {
     title: "한글도 되나요",
     excerpt: "star rating이랑 tag, markdown, pagination 추가해야 함",
     image: "https://avatars.githubusercontent.com/u/77003554?v=4"
    },
   
    {
     title: "Style 주기 귀찮다",
     excerpt: "내용이 너무 길어지면 옆이나 밑으로 쭉 이어나가는게 아니라 ...으로 짤리도록 수정하렴",
     image: "https://avatars.githubusercontent.com/u/77003554?v=4"
    },
   
    {
     title: "태그도 만들어주셈",
     excerpt: "밑에 버튼 없애고 star rating이랑 tag 넣으면 될듯",
     image: "https://avatars.githubusercontent.com/u/77003554?v=4"
    },
   
    {
     title: "✨이모지도 잘나와요✨",
     excerpt: "This is my fourth post with more content inside",
     image: "https://avatars.githubusercontent.com/u/77003554?v=4"
    },
   
    {
     title: "움짤도 돌아감",
     excerpt: "내용 적으면 짧아지는 것도 수정해라",
     image: "https://i.ppy.sh/398be0030d0ac56e953db93ce3884db1c5974a9f/68747470733a2f2f692e696d6775722e636f6d2f746d76517546742e676966"
    },
   
    {
     title: "BOJ 9999번 - 구구",
     excerpt: "백준 6대 난제 대표 문제 (하지만 도움 안됨)",
     image: "https://thumbs.gfycat.com/LongFreshIrukandjijellyfish-size_restricted.gif"
    }
]

export default function Posts(props) {
  return (
    <div style={{ marginTop: 20, padding: 30 }}>
      <Grid container spacing={6} justifyContent="center">
        {posts.map(post => (
          <Grid item key={post.title}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Sakura Nene"
                  height="140"
                  image={post.image}
                  title="Sakura Nene"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography component="p">{post.excerpt}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}