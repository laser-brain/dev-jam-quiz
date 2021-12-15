export default class StopWatch {
  constructor() {
    this._startTime = 0;
    this._endTime = 0;
  }
  private _startTime: number;
  private _endTime: number;

  public start() {
    this._startTime = Date.now();
  }

  public stop() {
    this._endTime = Date.now();
  }

  public reset() {
    this._startTime = 0;
    this._endTime = 0;
  }

  public elapsed(): Date {
    return this._endTime > 0
      ? new Date(this._endTime - this._startTime)
      : new Date(Date.now() - this._startTime);
  }

  public formatTimespan(timespan: Date): string {
    const result = `${String(timespan.getUTCHours()).padStart(2, '0')}:
    ${String(timespan.getMinutes()).padStart(2, '0')}:
    ${String(timespan.getSeconds()).padStart(2, '0')}.
    ${String(timespan.getMilliseconds()).padStart(3, '0')}`
      .replaceAll(' ', '')
      .replaceAll('\n', '');

    return result;
  }
}
