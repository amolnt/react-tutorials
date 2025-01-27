import {setupServer} from "msw";
import { handlers } from "./handler";

export const server = setupServer(...handlers);
