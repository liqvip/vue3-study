import type LoveTalk from "@/types/LoveTalk";
import { defineStore } from "pinia";

export const useLoveTalkStore = defineStore('talk',{
  state(){
    const loveTalkList: LoveTalk[] = []
    return {
      loveTalkList: loveTalkList,
    }
  }
})