import React, { useEffect, useState, useRef } from "react";
import Container from '@mui/material/Container';
import { Box, Button, Grid, Typography } from "@mui/material";
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm'
import { useLocation } from "react-router";
import { Viewer } from "@toast-ui/react-editor";
import '@toast-ui/editor/dist/toastui-editor.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const test_post = {
    title: "테스트 제목입니다",
    author: "Queue-ri",
    rate: 5,
    imageLink: "https://images.unsplash.com/photo-1572248525872-ac574b2bf06d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80",
    content: "# Test Header 1 \n### Sub Header \nSample content"
}

export default function PostView(props) {
    let navigate = useNavigate();

    const [post, setState] = useState([]);
    const id_data = useLocation();
    const id = id_data.state;
    let viewerRef = useRef();

    useEffect(() => {
        let post_content
        async function getPost() {
          try {
            const response = await axios.get('http://localhost:8080/api/v1/posts/'+id);
            setState(response.data)
            post_content = response.data.content
          } catch (e) {
            console.error(e);
          }
        }
        getPost().then( _ => {
            // viewerRef에 post.content로 전달하면 렌더링 시 데이터 반영 안될 때도 있는..
            // state에 대한 라이프사이클을 잘못 알고 있나? 뭔가 이상
            viewerRef.current.getInstance().setMarkdown(post_content);
        });
      }, [])

    const editPost = () => {
    navigate('/edit', {state: id});
    };

    async function deletePost() {
        try {
            const response = await axios
                .delete('http://localhost:8080/api/v1/posts/'+id)
                .then(navigate('/'));
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div style={{ marginTop: 20, padding: 30 }}>
            <Container maxWidth="md">
                <div style={{
                    backgroundImage: `url("`+ (post.imageLink ? post.imageLink: test_post.imageLink) +`")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: 250,
                    }}
                >
                    <Box sx={{height: 250, backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
                        <Grid container
                            spacing={0}
                            sx={{height: 250, display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                        >
                            <div style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Typography gutterBottom variant="h3" component="h3" sx={{ textAlign: 'center', color: '#ffffff', paddingLeft: 5, paddingRight: 5}}>
                                    {post.title}
                                </Typography>   
                                <Typography gutterBottom sx={{ textAlign: 'center', color: '#ffffff' }}>
                                    by. {post.author}
                                </Typography>
                            </div>
                        </Grid>
                    </Box>
                </div>

                <Box
                    maxWidth="md"
                    sx={{
                        marginTop: 5,
                        paddingTop: 3,
                        paddingLeft: 5,
                        paddingRight: 5,
                        paddingBottom: 3,
                        backgroundColor: '#ffffff',
                        boxShadow:`
                            0px 0px 3px rgba(0, 0, 0, 0.007),
                            0px 0px 6.8px rgba(0, 0, 0, 0.01),
                            0px 0px 11.8px rgba(0, 0, 0, 0.013),
                            0px 0px 18.8px rgba(0, 0, 0, 0.015),
                            0px 0px 29px rgba(0, 0, 0, 0.017),
                            0px 0px 45.2px rgba(0, 0, 0, 0.02),
                            0px 0px 75.1px rgba(0, 0, 0, 0.023),
                            0px 0px 150px rgba(0, 0, 0, 0.03)
                        `
                    }}
                >
                    <Viewer ref={viewerRef} />
                </Box>

                <Grid sx={{ marginTop: 3, marginBottom: 5, justifyContent:'right', flexWrap: 'nowrap' }} container spacing={2} >
                    <Grid item write sx={{flexShrink: 0 }}>
                        <Button variant="contained" onClick={editPost} sx={{textTransform:'none', borderRadius: '0.375rem'}}>수정하기</Button>
                    </Grid>

                    <Grid item view sx={{flexShrink: 0 }}>
                        <Button variant="contained" onClick={deletePost} sx={{borderRadius: '0.375rem'}}>삭제하기</Button>
                    </Grid>
                </Grid>
            </Container>

        </div>
    );
}