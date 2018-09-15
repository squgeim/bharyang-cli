#!/usr/bin/env node

const cli = require('./util/cli').default;
const processStdinStream = require('./bharyangCli').processStdinStream;

/**
 * If a pipe is attached, ie, the stdin is a readable stream, process that
 * stream; else, return invalid usage.
 */
if (cli.isPipeAttached()) {
  processStdinStream();
} else {
  console.log(cli.invalidUsageMessage());
  process.exit(1);
}
