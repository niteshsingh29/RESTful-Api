import { AspectRatio } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    // This video will have equal sides
    <AspectRatio maxW="560px" ratio={1}>
      <iframe
        title="naruto"
        src="https://www.youtube.com/embed/QhBnZ6NPOY0"
        allowFullScreen
      />
    </AspectRatio>
  );
}

export default App;
