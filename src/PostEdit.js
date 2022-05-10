import React, { useEffect, useRef } from "react";
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import Button from '@mui/material/Button';
import { Container, Box, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router";

export default function PostEdit() {
    let navigate = useNavigate();
    
    const titleRef = React.createRef();
    const imageLinkRef = React.createRef();
    let editorRef = useRef();
    // const contentCallback = useCallback(editor => {
    //     editorRef = editor;
    //     console.log(editorRef);
    //     (async function getPost() {
    //         try {
    //             const response = await axios.get('http://localhost:8080/api/v1/posts/'+id);
    //             const post = response.data;
    //             setTitleValue(post.title);
    //             setImageLinkValue(post.imageLink);
    //             if (editor !== null) {
    //                 editor.getInstance().setMarkdown(post.content);
    //             }
    //             setTagValue(post.tags.toString());
    //         } catch (e) {
    //             console.error(e);
    //         }
    //     })();
    //   }, []);

    useEffect(()=>{
        let post
        async function getPost() {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/posts/'+id);
                post = response.data;
                setTitleValue(post.title);
                setImageLinkValue(post.imageLink);
                // console.log(1, post.content);
                setTagValue(post.tags.toString());
            } catch (e) {
                console.error(e);
            }
        }
        getPost().then( _ => {
            // console.log(editorRef.current);
            editorRef.current.getInstance().setMarkdown(post.content);
            // console.log(2, post.content);
        });
        
    },[])
    const tagRef = React.createRef();

    const id_data = useLocation();
    const id = id_data.state;

    const [titleValue, setTitleValue] = React.useState([]);
    const [imageLinkValue, setImageLinkValue] = React.useState([]);
    const [tagValue, setTagValue] = React.useState([]);
    
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

    async function editPost() {
        try {
            // console.log(editorRef);
            const response = await axios.put('http://localhost:8080/api/v1/posts/'+id, {
                title: titleRef.current.value,
                content: editorRef.current.getInstance().getMarkdown(),
                imageLink: imageLinkRef.current.value,
                tag: tagRef.current.value
            }).then(navigate('/'));
            
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
                value={titleValue}
                onChange={e => setTitleValue(e.target.value)}
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
                value={imageLinkValue}
                onChange={e => setImageLinkValue(e.target.value)}
                />
                <Box sx={{marginTop: 2}}>
                   <Editor
                    ref={editorRef}
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
                value={tagValue}
                onChange={e => setTagValue(e.target.value)}
                />
                
                <Grid sx={{marginTop: 3, marginBottom: 5}} container justifyContent="flex-end">
                    <Grid item save>
                        <Button variant="contained" onClick={editPost}>저장하기</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};