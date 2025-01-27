import React from 'react';
import '@testing-library/jest-dom'
import {expect, describe, beforeEach} from "@jest/globals";
import { render, screen } from "@testing-library/react";
import SwapLists  from "../components/SwapLists";

// let SwapListsMoc = jest.fn("../components/SwapLists");

describe("Swap List", () => {
    it("Render Component", () => {
        render(<SwapLists />)
        let divText = screen.getByText("List1")
        expect(divText).toBeVisible();
    })
})