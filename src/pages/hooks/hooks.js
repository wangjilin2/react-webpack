import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
  useMemo,
  useRef,
  useCallback,
} from "react";
import { Button } from "antd";

// const CountContext=createContext();

// function Father(){
//     let count=useContext(CountContext);
//     return(
//         <div>{count}</div>
//     )
// }

// function Hooks(){
//     const [count,setCount]=useState(0);
//     // useEffect(()=>{
//     //     console.log('count',count);
//     // })
//     return(
//         <div>
//             {count}
//             <Button onClick={()=>{setCount(count+1)}}>click</Button>
//             <CountContext.Provider value={count}>
//                     <Father/>
//             </CountContext.Provider>
//         </div>
//     )
// }

// function Hooks(){
//     const [count,dispatch]=useReducer((state,action)=>{
//         switch(action){
//             case 'add':
//                 return state+1;
//             case 'sub':
//                 return state-1;
//             default:
//                 return state;
//         }
//     },0)
//     return(
//         <div>
//             {count}
//             <Button onClick={()=>{dispatch('add')}}>增</Button>
//             <Button onClick={()=>{dispatch('sub')}}>减</Button>

//         </div>
//     )
// }

function useMemoDemo() {
  const [xiaohong, setXiaoHong] = useState("小红待客状态");
  const [zhiling, setZhiLing] = useState("志玲待客状态");
  return (
    <div>
      <Button
        onClick={() => {
          setXiaoHong(new Date().getTime());
        }}
      >
        小红
      </Button>
      <Button
        onClick={() => {
          setZhiLing(new Date().getTime() + "志玲向我们走来");
        }}
      >
        志玲
      </Button>
      <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
    </div>
  );
}

function ChildComponent({ name, children }) {
  console.log("child", children);
  function changeXiaoHong() {
    console.log("她来了她来了，小红向我们走来了");
    return name + ",小红向我们走来了";
  }
  const actionXiaohong = useMemo(() => changeXiaoHong(name), [name]);
  return (
    <div>
      <div>{actionXiaohong}</div>
      <div>{children}</div>
    </div>
  );
}

function useRefDemo() {
  const inputEL = useRef();
  const onButtonClick = () => {
    inputEL.current.value = "wangjilin";
    console.log(inputEL);
  };

  const [text, setText] = useState("lingling");
  const textRef = useRef();
  console.log(text);
  return (
    <div>
      <input type="text" ref={inputEL} />
      <Button onClick={onButtonClick}>在Input上展示文字</Button>

      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
}

function useWinSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });
  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    });
  }, []);
  useEffect(()=>{
      window.addEventListener('resize',onResize);
      return ()=>{
          window.removeEventListener('resize',onResize)
      }
  },[])
  return size
}
function useCallbackDemo(){
    const size=useWinSize();
    return (
    <div>{size.width}x{size.height}</div>
    )
}
export default useCallbackDemo;
