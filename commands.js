import 'dotenv/config';
import { capitalize, InstallGlobalCommands } from './utils.js';

// Simple test command
const TEST_COMMAND = {
  name: 'test',
  description: 'Basic command',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

const HUSO_COMMAND = {
  name: 'huso',
  description: 'Basic command',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

const AI_COMMAND = {
  name: 'ai',
  description: 'Basic command',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
  options: [
    {
      name: "prompt",
      description: "Enter a prompt",
      type: 3,
      required: true,
    }
  ],
}

const ALL_COMMANDS = [TEST_COMMAND, HUSO_COMMAND, AI_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
