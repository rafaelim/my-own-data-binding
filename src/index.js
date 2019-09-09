import model from "./model/index"
import interpolate from "./bind";
import Notifier from "./notifier";

export default function Binding(data) {
    this.notifier = new Notifier();
    const self = this;
    const proxy = new Proxy(data,  {
        get(obj, key) {
            return obj[key];
        },
        set(obj, key, value) {
            obj[key] = value;
            self.notifier.notify(key)
            return true;
        }
    });

    model.call(this, proxy);
    interpolate.call(this, proxy)
}

