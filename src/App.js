import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Stepper from "./Stepper";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Stepper
        stepsJson={[
          {
            id: 1,
            name: "Site",
            order: 0
          },
          {
            id: 2,
            name: "IPs",
            order: 1
          },
          {
            id: 3,
            name: "WAN",
            order: 2
          },
          {
            id: 4,
            name: "Device",
            order: 3
          },
          {
            id: 5,
            name: "LAN",
            order: 4
          },
          {
            id: 6,
            name: "Info",
            order: 5
          },
          {
            id: 7,
            name: "Review",
            order: 6
          }
        ]}
      ></Stepper>
    </div>
  );
}
