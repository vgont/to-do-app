import Title from "./components/Title";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <>
      <main className="flex flex-col justify-center items-center gap-20">
        <Title/>
        <AddTodo/>
     </main>
    </>
  );
}

export default App;
