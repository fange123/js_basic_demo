class ZHY {
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";
  constructor(executor) {
    this.status = ZHY.PENDING;
    this.value = null;
    this.callbacks = [];
    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }
  resolve(value) {
    if (this.status === ZHY.PENDING) {
      this.status = ZHY.FULFILLED;
      this.value = value;
      this.callbacks.map((callback) => callback.onFulfilled(value));
      setTimeout(() => {});
    }
  }
  reject(reason) {
    if (this.status === ZHY.PENDING) {
      this.status = ZHY.REJECTED;
      this.value = reason;
      setTimeout(() => {
        this.callbacks.map((callback) => callback.onRejected(reason));
      });
    }
  }
  then(onFulfilled, onRejected) {
    if (typeof onFulfilled !== "function") {
      onFulfilled = () => {};
    }
    if (typeof onRejected !== "function") {
      onRejected = () => {};
    }

    return new ZHY((resolve, reject) => {
      if (this.status === ZHY.PENDING) {
        this.callbacks.push({
          onFulfilled: (value) => {
            try {
              onFulfilled(value);
            } catch (error) {
              onRejected(error);
            }
          },
          onRejected: (value) => {
            try {
              onRejected(value);
            } catch (error) {
              onRejected(error);
            }
          },
        });
      }
      if (this.status === ZHY.FULFILLED) {
        setTimeout(() => {
          try {
            onFulfilled(this.value);
          } catch (error) {
            onRejected(error);
          }
        });
      }
      if (this.status === ZHY.REJECTED) {
        setTimeout(() => {
          try {
            onRejected(this.value);
          } catch (error) {
            onRejected(error);
          }
        });
      }
    });
  }
}
