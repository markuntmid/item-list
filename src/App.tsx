import { useEffect, useState } from "react";
import Homepage from "./components/pages/Homepage";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [list, setList] = useState({});

  useEffect(() => {
    async function fetchData () {
      const response = await fetch("https://mocki.io/v1/d392411d-4379-436f-adb1-440ed09839b2")
      const responseJson = await response.json();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newData = responseJson.reduce((acc: any = [], current: { category: string }) => {
        acc[current.category] = acc[current.category] || [];
        acc[current.category].push(current);
        return acc;
      }, Object.create(null))      
      
      setList(() => ({
        ...newData
      }))
    }

    fetchData();
  }, []);

  console.log(list);
  

  return (<>
      <Homepage data={list} />
    </>);
}

export default App;
