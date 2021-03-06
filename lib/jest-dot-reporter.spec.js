const JestDotReporter = require('./jest-dot-reporter');

describe('Jest Dot reporter', () => {

  let reporter;

  beforeEach(() => {
    reporter = new JestDotReporter();
  });

  it('should implement onRunComplete ', () => {
    expect(reporter.onRunComplete).toBeDefined();
  });

  it('should implement onRunStart ', () => {
    expect(reporter.onRunStart).toBeDefined();
  });

  it('should implement onTestResult ', () => {
    expect(reporter.onTestResult).toBeDefined();
  });
});
