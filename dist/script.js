function Calculator() {
  let [current, setCurrent] = React.useState(0);
  let [temp, setTemp] = React.useState("0");
  let [aggregate, setAggregate] = React.useState("");

  function handleClick(event) {
    let { textContent } = event.target;

    if (!isNaN(textContent) || textContent === "-") {
      if (temp == "0" && textContent == "0") return;
      let number =
      (temp && !isNaN(temp) ? temp : (temp + "").includes("-") ? temp : "") + (
      textContent === "-" && (temp + "").includes("-") ? "" : textContent);

      if (
      number.includes("-") ||
      isFinite(number) && (number + "").length < 18)
      {
        if (temp == "0") {
          setCurrent(number.slice(1) || "0");
          setTemp(number.slice(1)) || "0";
        } else if (number.endsWith("-")) {
          console.log(number);
          setAggregate(aggregate + number.slice(0, number.length - 1));
          setCurrent("-");
          setTemp("-");
        } else {
          setCurrent(number);
          setTemp(number);
        }
      }
    } else if (textContent === ".") {
      if ((current + "").includes(".")) return;
      setCurrent(temp + ".");
      setTemp(temp + ".");
    } else if (["+", "-", "/", "x"].some(item => item === textContent)) {
      if (temp.includes("=")) setAggregate(temp.slice(1) + textContent);else
      {
        let n = aggregate.length;

        if (
        !temp &&
        n &&
        ["+", "/", "x"].some(item => item === aggregate[n - 1]))

        setAggregate(aggregate.slice(0, n - 1) + temp + textContent);else
        if ((temp + "").endsWith("-"))
        setAggregate(
        aggregate.slice(0, n - 1) +
        temp.slice(0, temp.length - 1) +
        textContent);else

        setAggregate(aggregate + temp + textContent);
        setCurrent(textContent);
        setTemp("");
      }
    } else if (textContent == "=") {
      setAggregate(aggregate + temp);
      console.log(aggregate + temp);
      let result = eval(aggregate.replaceAll("x", "*") + temp);
      setTemp("=" + result);
      setCurrent(result);
    } else {
      setTemp("0");
      setAggregate("");
      setCurrent(0);
    }
  }

  return (
    React.createElement("div", { id: "calculator" },
    React.createElement("div", { id: "display-cunt" },
    React.createElement("span", { className: "aggregate" }, aggregate + "" + temp),
    React.createElement("br", null),
    React.createElement("span", { id: "display" }, current)),

    React.createElement("button", { onClick: handleClick, id: "clear" }, "AC"),


    React.createElement("button", { onClick: handleClick, id: "divide" }, "/"),


    React.createElement("button", { onClick: handleClick, id: "multiply" }, "x"),


    React.createElement("button", { onClick: handleClick, id: "seven" }, "7"),


    React.createElement("button", { onClick: handleClick, id: "eight" }, "8"),


    React.createElement("button", { onClick: handleClick, id: "nine" }, "9"),


    React.createElement("button", { onClick: handleClick, id: "subtract" }, "-"),


    React.createElement("button", { onClick: handleClick, id: "four" }, "4"),


    React.createElement("button", { onClick: handleClick, id: "five" }, "5"),


    React.createElement("button", { onClick: handleClick, id: "six" }, "6"),


    React.createElement("button", { onClick: handleClick, id: "add" }, "+"),


    React.createElement("button", { onClick: handleClick, id: "one" }, "1"),


    React.createElement("button", { onClick: handleClick, id: "two" }, "2"),


    React.createElement("button", { onClick: handleClick, id: "three" }, "3"),


    React.createElement("button", { onClick: handleClick, id: "equals" }, "="),


    React.createElement("button", { onClick: handleClick, id: "zero" }, "0"),


    React.createElement("button", { onClick: handleClick, id: "decimal" }, ".")));




}

function App() {
  return React.createElement(Calculator, null);
}

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));