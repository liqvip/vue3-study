import { defineStore } from "pinia";

export const useLoveTalkStore = defineStore('talk',{
  state(){
    return {
      loveTalkList: JSON.parse(localStorage.getItem('loveTalkList') as string) || [],
    }
  }
})