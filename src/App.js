import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";
import { SiGoogletagmanager } from "react-icons/si";
import logo from "./assets/images/logo.png";
import InputField from "./components/InputField/InputField";
import Table from "./components/Table/Table";
import SquadSelector from "./components/SquadSelector/SquadSelector";
import AddressDetails from "./components/AddressDetails/AddressDetails";
import DatePicker from "./components/DatePicker/DatePicker";
import React from "react";
import { useLocalStorage } from "react-use";

const StyledImage = styled.img`
  max-height: 100px;
  width: 100px;
`;

const Divider = styled.div`
  height: 50px;
  width: 100%;
`;

const Pdf = styled.div`
  height: 612/2px;
  width: 792px;
  background-color: white;
  margin: 80px auto;
`;

const InputDivider = styled.div`
  height: 15px;
`;

const SectionTitle = styled.p`
  font-weight: "bold";
`;

const MainContainer = styled.div`
  padding: 50px;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ExportButton = styled.button`
  padding: 10px 15px;
  border-radius: 10px;
  border: none;
  background-color: #34c89f;
  color: white;
`;

const Column = styled.div`
  flex: 1;
  padding: 10px 20px;
`;

function App() {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <MainContainer>
      <Divider />
      <StyledImage src={logo} />
      <h1>WFH & Travel Expenses</h1>
      <Divider />
      <FormContainer>
        <Column>
          <SectionTitle>ANDi information</SectionTitle>
          <InputField
            value={name}
            ariaLabel="Name"
            placeholder={"Your Name *"}
            icon={<FaUserAlt />}
            onChange={(e) => setName(e.target.value)}
          />
          <InputDivider />
          <InputDivider />
          <InputField
            placeholder={"Some other info *"}
            icon={<SiGoogletagmanager />}
          />
        </Column>
        <Column>
          <SquadSelector squads={["Elly", "Wilson", "Cohen", "Tenzing"]} />
        </Column>
        <Column>
          <SectionTitle>Home Address</SectionTitle>
          <AddressDetails />
        </Column>
      </FormContainer>
      <DatePicker />
      <Pdf>
        <h2>Preview</h2>
        <p>{name}</p>
        <Table />
        <ExportButton>Download Pdf</ExportButton>
      </Pdf>
    </MainContainer>
  );
}

export default App;
