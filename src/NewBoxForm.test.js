import { render, fireEvent } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

it("renders without creash", function(){
    render(<NewBoxForm/>);
});

it("matches snapshot", function(){
    const { asFragment } = render(<NewBoxForm/>);
    expect(asFragment()).toMatchSnapshot();
});
