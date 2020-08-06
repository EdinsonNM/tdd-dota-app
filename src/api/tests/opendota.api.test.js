import OpenDotaApi from "../opendota.api";
import Api from "../api";
import {throwError} from "rxjs";
import mock from "xhr-mock";
import {of} from "rxjs";
import {catchError} from "rxjs/operators";
const {build, fake, sequence, arrayOf} = require("test-data-bot");

beforeAll(() => {
    process.env = Object.assign(process.env, {
        REACT_APP_SERVER_URL: "http://www.testapi.com",
    });
});
describe("OpenDotaApi", () => {
    describe("getAll", () => {
        beforeEach(() => mock.setup());
        afterEach(() => mock.teardown());
        test("should return [1,2,3] when response is 200", (done) => {
            const responseBuilder = build("User").fields({
                name: fake((f) => f.name.findName()),
                email: sequence((x) => `jack${x}@test.com`),
                age: 26,
            });
            const data = [responseBuilder(), responseBuilder()];
            console.log(data);
            mock.get(`${process.env.REACT_APP_SERVER_URL}/data`, {
                body: JSON.stringify(data),
            });
            OpenDotaApi.getAll().subscribe((result) => {
                expect(result.response).toEqual(data);
                expect(result.status).toEqual(200);
                done();
            });
        });

        test("error getAll", (done) => {
            mock.get(`${process.env.REACT_APP_SERVER_URL}/data`, {
                status: 404,
            });
            const expectedData = [1, 2, 3];
            OpenDotaApi.getAll().subscribe(null, (error) => {
                expect(error.status).toEqual(404);
                done();
            });
        });
    });
});
