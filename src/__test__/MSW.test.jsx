import React from "react"
import { render, screen } from "@testing-library/react"
import MSWDemoComponent from "../components/MSWDemoComponent"

const MockedMSWDemoComponent = jest.mock('../components/MSWDemoComponent');

describe("MSW Component", () => {
    it("Initial Render Component", () => {
        render(<MockedMSWDemoComponent />)
        const headerText = screen.getByText("Users Lists")
        expect(headerText).toBeInTheDocument()
    })
})