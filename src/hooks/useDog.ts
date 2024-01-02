import axios from "axios";
import { reactive } from "vue";

export default function(){
  // 数据
  const dogList = reactive<string[]>([]);

  // 方法
  async function getDog() {
    try {
      const res = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
      console.log(res)
      dogList.push(res.data.message)
    } catch (error) {
      alert(error)
    }
  }

  // 向外部提供东西
  return {dogList, getDog};
}