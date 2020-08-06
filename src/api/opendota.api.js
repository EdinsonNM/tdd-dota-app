import {of} from "rxjs";
import Api from "./api";

export default class OpenDotaApi extends Api {
    static getAll() {
        return super.get("data", {});
    }
}
