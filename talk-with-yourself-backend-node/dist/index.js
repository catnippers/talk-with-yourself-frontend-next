"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: ".env" });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.listen(process.env.PORT, () => console.log(`Server listening on PORT ${process.env.PORT}`));
//# sourceMappingURL=index.js.map