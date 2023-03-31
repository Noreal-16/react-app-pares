import React from "react";
import { render, screen, fileEvent, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { HeadersComponent } from "../components/headers";

beforeEach(() => render(<HeadersComponent />));
describe("HeadersComponent", () => {
    it('must content Technical Test', () => {
        expect(screen.getByRole("heading",{name:/Technical Test/i})).toBeInTheDocument();
    });

})