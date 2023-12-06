import {create} from "zustand";

export const useQuestionsStore=create((set)=>{
    return {
        questions:[],
        currentQuestion:0,
        fetchQuestions:async(limit)=>{
            const res=await fetch("http://localhost:5173/src/mocks/data.json")
            const json=await res.json();
            const questions=json.sort(()=>Math.random()-0.5).slice(0,limit);
            set({questions});
        }
    }
})