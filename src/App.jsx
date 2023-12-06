import './App.css'
import { Container, Typography, Stack } from '@mui/material'
import { JSLogo } from './components/JSLogo';
import { Start } from './pages/Start';
import { useQuestionsStore } from './store/questions';
import { Game } from './pages/Game';


function App() {
const questions=useQuestionsStore(state=>state.questions);
console.log(questions);
 return (
    <main>
      <Container maxWidth="sm" />
      <Typography variant='h2' component="h1">
        <Stack direction="row" gap={2} alignItems="center" justifyContent="center">
          <JSLogo />
        </Stack>
      </Typography>
      <h1>JavaScript Quiz</h1>
      {questions.length===0 && <Start/>}
      {questions.length>0 && <Game />}
    </main>
 )
}

export default App
