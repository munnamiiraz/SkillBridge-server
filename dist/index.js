"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const PORT = process.env.PORT || 10000;
async function bootstrap() {
    try {
        console.log("Connected to the database successfully.");
        app_1.default.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
    catch (error) {
        console.error("An error occurred during bootstrap:", error);
        process.exit(1);
    }
}
bootstrap();
exports.default = app_1.default;
