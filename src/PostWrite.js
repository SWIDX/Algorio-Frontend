import React from "react";
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import Button from '@mui/material/Button';
import { Container, Box, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function PostWrite() {
    let navigate = useNavigate();

    const titleRef = React.createRef();
    const imageLinkRef = React.createRef();
    const contentRef = React.createRef();
    const tagRef = React.createRef();
    
    /*
    const onClickSave = () => {
        try {
            console.log(titleRef.current.value);
            console.log(imageLinkRef.current.value);
            console.log(contentRef.current.getInstance().getMarkdown());
            console.log(tagRef.current.value);
            // 백엔드 저장 로직
        } catch (e) {
            console.error(e);
        }
    }
    */

    async function savePost() {
        try {
            const response = await axios.post('http://localhost:8080/api/v1/posts', {
                title: titleRef.current.value,
                author: 'Queue-ri', /* temp */
                content: contentRef.current.getInstance().getMarkdown(),
                imageLink: imageLinkRef.current.value,
                tag: tagRef.current.value
            });
            // console.log(response);
            navigate('/')
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <Container maxWidth="md" sx={{marginTop: 5}}>
                <TextField
                margin="normal"
                required
                fullWidth
                name="title"
                label="Title"
                id="title"
                autoComplete="title"
                inputRef={titleRef}
                />
                <TextField
                margin="normal"
                required
                fullWidth
                name="image"
                label="Image Link"
                id="image"
                autoComplete="image"
                inputRef={imageLinkRef}
                />
                <Box sx={{marginTop: 2}}>
                   <Editor
                    ref={contentRef}
                /> 
                </Box>
                <TextField
                margin="normal"
                required
                fullWidth
                name="tag"
                label="Tag (comma separated)"
                id="tag"
                autoComplete="tag"
                inputRef={tagRef}
                />
                
                <Grid sx={{marginTop: 3, marginBottom: 5}} container justifyContent="flex-end">
                    <Grid item save>
                        <Button variant="contained" onClick={savePost}>저장하기</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};