import { useDispatch, useSelector } from "react-redux";
import { View } from "@tarojs/components";
import { AtButton } from "taro-ui";

import { add } from "../../../actions/counter";

import "./index.less";

interface ICounter {
  num: number;
}

const Index = () => {
  const { num } = useSelector(({ counter }: { counter: ICounter }) => counter);
  const dispatch = useDispatch();
  return (
    <View className='container'>
      <AtButton type='primary' size='small' onClick={() => dispatch(add())}> { num } </AtButton>
    </View>
  );
};

export default Index;
