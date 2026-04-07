import { defineConfig } from "vitest/config";
import {
  vitestSetupFilePath,
  getClarinetVitestsArgv,
} from "@stacks/clarinet-sdk/vitest";

/**
 * StacksMinimint Vitest Configuration
 * 
 * This configuration enables testing of Clarity smart contracts using Vitest
 * with the Clarinet SDK's simnet environment.
 * 
 * Key features:
 * - Simnet environment for local contract testing
 * - Custom matchers for Clarity types (e.g., expect(...).toBeUint())
 * - Automatic cost and coverage reporting
 * 
 * Usage:
 * - Run tests: npm test
 * - Run with coverage: npm test -- --coverage
 * - Run specific test: npm test -- path/to/test.ts
 */
export default defineConfig({
  test: {
    // Use clarinet environment for Clarity contract testing
    environment: "clarinet",
    
    // Use fork pool for better isolation between test files
    pool: "forks",
    
    // Clarinet handles test isolation by resetting the simnet between tests
    // Setting to false improves test performance
    isolate: false,
    
    // Setup files run before each test file
    setupFiles: [
      vitestSetupFilePath,
      // Add custom setup files here if needed
    ],
    
    // Clarinet-specific environment options
    environmentOptions: {
      clarinet: {
        ...getClarinetVitestsArgv(),
        // Override or add clarinet options here
      },
    },
    
    // Include coverage configuration
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: ["node_modules/", "contracts/archive/"],
    },
  },
});
