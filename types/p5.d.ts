import * as p5Global from "p5/global";

declare global {
    interface Window {
        setup: () => void;
        draw: () => void;
    }
}