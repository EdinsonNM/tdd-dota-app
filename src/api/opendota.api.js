import {of} from "rxjs";
import Api from "./api";
import {OpenDotaApiUrl} from "../constants/api";

export default class OpenDotaApi extends Api {
    static getPlayer(userid) {
        return super.get(OpenDotaApiUrl.getPlayer(userid), {});
    }
}
