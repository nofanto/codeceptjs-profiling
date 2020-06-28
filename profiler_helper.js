const { Helper } = codeceptjs;

class Profiler extends Helper {

  // before/after hooks
  /**
   * @protected
   */
  _before() {
    // remove if not used
  }

  /**
   * @protected
   */
  _after() {
    // remove if not used
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']

  async startProfiling() {
    const page = this.helpers['Puppeteer'].page;
    //start profiler
    await page.tracing.start({
      path: `output/profile-${new Date().getTime()}.json.json`
    });
  }

  async stopProfiling() {
    const page = this.helpers['Puppeteer'].page;
    //stop profiler
    await page.tracing.stop();
  }


}

module.exports = Profiler;
