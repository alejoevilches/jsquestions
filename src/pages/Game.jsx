import { Card, IconButton, Stack, Typography, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useQuestionsStore } from "../store/questions";
import SyntaxHighlighter from "react-syntax-highlighter";
import { gradientDark } from "react-syntax-highlighter/dist/esm/styles/hljs"

const Question=({info})=>{
    return (
        <Card variant="outlined" sx={{bgcolor:"#222", textAlign:"left", p:2}}>
            <Typography variant="h5">
                {info.question}
            </Typography>
            <SyntaxHighlighter language="javascript" style={gradientDark}>
                {info.code}
            </SyntaxHighlighter>
            <List sx={{bgcolor: "#333"}} disablePadding>
                {info.answers.map((ans, i)=>{
                    return (
                        <ListItem key={i} divider>
                            <ListItemButton>
                                <ListItemText primary={ans} sx={{textAlign:"center"}}></ListItemText>
                            </ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
        </Card>
    )
}
export const Game=()=>{
    const questions=useQuestionsStore(state=>state.questions);
    const currentQuestion=useQuestionsStore(state=>state.currentQuestion);
    const questionInfo=questions[currentQuestion]
    return (
        <>
            <Question info={questionInfo}></Question>
        </>
    )
}