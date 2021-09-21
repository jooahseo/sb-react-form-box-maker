import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without creash", function(){
    render(<BoxList/>);
});

it("matches snapshot", function(){
    const { asFragment } = render(<BoxList/>);
    expect(asFragment()).toMatchSnapshot();
});

it("should add new box", function(){
    const { queryByText, queryByLabelText, queryByTestId } = render(<BoxList/>);
    const widthInput = queryByLabelText("Width");
    const heightInput = queryByLabelText("Height");
    const bgColorInput = queryByLabelText("Background Color");
    const addBtn = queryByText("Add Box");

    expect(queryByTestId("box")).not.toBeInTheDocument();
    expect(queryByText("X")).not.toBeInTheDocument();

    fireEvent.change(widthInput,{target: {value: "30"}});
    fireEvent.change(heightInput,{target: {value: "30"}});
    fireEvent.change(bgColorInput,{target:{value: "pink"}});

    fireEvent.click(addBtn);
    
    expect(queryByTestId("box")).toBeInTheDocument();
    expect(queryByText("X")).toBeInTheDocument();
});