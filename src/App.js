import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";
import { SiGoogletagmanager } from "react-icons/si";
import logo from "./assets/images/logo.png";
import InputField from "./components/InputField/InputField";
import Table from "./components/Table/Table";
import SquadSelector from "./components/SquadSelector/SquadSelector";
import AddressDetails from "./components/AddressDetails/AddressDetails";
import DatePicker from "./components/DatePicker/DatePicker";

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

const Title = styled.p`
  font-weight: "bold";
`;

function App() {
  return (
    <div className="container">
      <Divider />
      <StyledImage src={logo} />
      <h1>WFH & Travel Expenses</h1>
      <Divider />
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <Title>ANDi information</Title>
            <InputField
              ariaLabel="Name"
              placeholder={"Your Name *"}
              icon={<FaUserAlt />}
            />
            <InputDivider />
            <InputField
              placeholder={"Project *"}
              icon={<SiGoogletagmanager />}
            />
            <InputDivider />
            <InputField
              placeholder={"Some other info *"}
              icon={<SiGoogletagmanager />}
            />
          </div>
          <div class="col-sm">
            <SquadSelector />
            <InputDivider />
          </div>
          <div class="col-sm">
            <Title>Home Address</Title>
            <AddressDetails />
          </div>
        </div>
        <DatePicker />
      </div>
      <Pdf>
        <h2>preview</h2>
        <Table />
      </Pdf>
      <button type="button" color="pink" class="btn btn-primary">
        Download Pdf
      </button>
    </div>
  );
}

export default App;
