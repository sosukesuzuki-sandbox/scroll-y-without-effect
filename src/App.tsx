import { Suspense } from "react";
import Content from "./Content";
import { useScrollY } from "./useScrollY";

function App() {
  const scrollY = useScrollY();
  return (
    <>
      <div>
        <h1>Hello</h1>
        <Suspense fallback={<p>読込中</p>}>
          <Content />
        </Suspense>
      </div>
      <div
        style={{
          border: "1px solid black",
          position: "fixed",
          bottom: "0",
          right: "0",
          padding: "50px 100px",
          backgroundColor: "white",
        }}
      >
        <p>`window.scrollY`: {scrollY}</p>
      </div>
    </>
  );
}

export default App;
