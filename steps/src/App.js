import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // hanlde previous function
  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  // hanlde next function
  function handleNet() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <div>
      <buttonnpm className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </buttonnpm>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}{" "}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previouse
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNet}
            >
              Nexxt
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
