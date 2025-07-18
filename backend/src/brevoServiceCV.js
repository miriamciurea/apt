"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var SibApiV3Sdk = require('sib-api-v3-sdk');
require("dotenv").config(); // ✅ simplu

var sendCvEmail = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var client, apiKey, emailApi, sendSmtpEmail, response, error_1;
    var name = _b.name, email = _b.email, cv = _b.cv;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                client = SibApiV3Sdk.ApiClient.instance;
                apiKey = client.authentications['api-key'];
                apiKey.apiKey = process.env.BREVO_API_KEY;
                emailApi = new SibApiV3Sdk.TransactionalEmailsApi();
                sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail({
                    to: [{ email: 'miriamciurea777@icloud.com' }],
                    sender: { email: 'miriamciurea@gmail.com', name: 'APT' },
                    subject: "New CV Submission from ".concat(name),
                    textContent: "You have received a new CV submission from:\nName: ".concat(name, "\nEmail: ").concat(email),
                    attachment: [
                        {
                            name: cv.originalname,
                            content: cv.buffer.toString('base64'),
                        },
                    ],
                });
                _c.label = 1;
            case 1:
                _c.trys.push([1, 3, , 4]);
                return [4 /*yield*/, emailApi.sendTransacEmail(sendSmtpEmail)];
            case 2:
                response = _c.sent();
                console.log('Email with CV sent successfully:', response);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _c.sent();
                console.error('Error sending email with CV:', error_1);
                throw error_1;
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.default = sendCvEmail;
