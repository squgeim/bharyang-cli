#!/usr/bin/env node

const isPipeAttached = require('./util/cli').isPipeAttached;
const processStdinStream = require('./bharyangCli').processStdinStream;

if (isPipeAttached()) {
  processStdinStream();
}
