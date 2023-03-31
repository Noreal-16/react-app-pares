import React from "react";
import { render, screen, fileEvent, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { FormsComponent } from "../components/form";

beforeEach(() => render(<FormsComponent />));
describe("FormsComponents", () => {

    it('must content Objetive', () => {
        expect(screen.getByLabelText(/Objetive/i)).toBeInTheDocument();
    });

    it('must content numbers value', () => {
        const { getByLabelText } = render(<FormsComponent />);
        const input = getByLabelText(/Objetive/i);
        fireEvent.change(input, {target:{value:'2'}});
        expect(input.value).toBe('2');
    });

    it('must content numbers value', () => {
        const { getByLabelText } = render(<FormsComponent />);
        const input = getByLabelText(/Objetive/i);
        fireEvent.change(input, {target:{value:'50'}});
        expect(input.value).toBe('50');
    });

    it('must content Arrays', () => {
        expect(screen.getByLabelText(/Array/i)).toBeInTheDocument();
    });

    it('must content numbers value', () => {
        const { getByLabelText } = render(<FormsComponent />);
    const input = getByLabelText('Array');
    fireEvent.change(input, { target: { value: '1,2,3,4,5' } });
    expect(input.value).toBe('1,2,3,4,5');
    });
});