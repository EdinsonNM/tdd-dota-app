import OpenDotaApi from "../opendota.api";
import Api from "../api";
import {throwError} from "rxjs";
import mock from "xhr-mock";
import {of} from "rxjs";
import {catchError} from "rxjs/operators";
import {PlayerBuilder} from "../../constants/mocks/player.mock";
const {build, fake, sequence, arrayOf} = require("test-data-bot");
import {OpenDotaApiUrl} from "../../constants/api";
const REACT_APP_SERVER_URL = "http://test.com";
const OLD_ENV = process.env;

describe("OpenDotaApi", () => {
    beforeAll(() => {
        process.env = {...OLD_ENV, REACT_APP_SERVER_URL};
    });
    describe("getPlayer", () => {
        const USER_ID = 123;
        const URL_PLAYER = `${REACT_APP_SERVER_URL}/${OpenDotaApiUrl.getPlayer(123)}`;
        beforeEach(() => mock.setup());

        test("should return success data when response is 200", (done) => {
            const player = PlayerBuilder();
            mock.get(URL_PLAYER, {
                body: JSON.stringify(player),
            });
            OpenDotaApi.getPlayer(USER_ID).subscribe((result) => {
                expect(result.response).toEqual(player);
                expect(result.status).toEqual(200);
                done();
            });
        });

        test.each([400, 404, 500])(
            "should return error whe  response is 404",
            (status, done) => {
                mock.get(URL_PLAYER, {
                    status: status,
                });
                OpenDotaApi.getPlayer(USER_ID).subscribe(null, (error) => {
                    expect(error.status).toEqual(status);
                    done();
                });
            }
        );
        afterEach(() => mock.teardown());
    });
    afterAll(() => {
        process.env = OLD_ENV;
    });
});
