const nextJest = require("next/jest");

const createJestConfig = nextJest({
    dir: "./",
});

const customJestConfig = {
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    moduleDirectories: ["node_modules", "<rootDir>/", "src"],
    testEnvironment: "jest-environment-jsdom",
    moduleNameMapper: {
        "src/(.*)": "<rootDir>/src/$1",
    },
};

module.exports = createJestConfig(customJestConfig);
