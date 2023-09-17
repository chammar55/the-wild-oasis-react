import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  /* background-color: orangered; */
  padding: 20px;
`;

function App() {
  return (
    <>
      {/* GlobalStyle have to be sibling to implement */}
      <GlobalStyles />
      <StyledApp>
        {/* its using the default layout see Row.jsx */}
        <Row>
          <Row type="horizontal">
            {/* "as" will change the that tag to assigned one */}
            {/* we can also use "type " in place of as but that will not change the tags, means that tag will remain h1 but their properties will be of h2 and h3 that's not good */}
            <Heading as="h1">Hello world</Heading>
            <div>
              <Heading as="h2">Check in and out</Heading>
              <Button onClick={() => alert("check in ")}>Check in</Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => alert("check out ")}
              >
                Check out
              </Button>
            </div>
          </Row>

          <Row>
            <Heading as="h3">Form</Heading>
            <form>
              <Input type="number" placeholder="Number of guests" />
              <Input type="number" placeholder="Number of guests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
