"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const aws_amplify_1 = require("aws-amplify");
const auth_service_1 = require("./auth.service");
const register_dto_1 = require("./DTO/register.dto");
const user_service_1 = require("../modules/user/user.service");
const jwt_auth_guard_1 = require("../guard/jwt-auth.guard");
const login_dto_1 = require("./DTO/login.dto");
const validation_pipe_1 = require("../pipes/validation.pipe");
const mail_service_1 = require("../modules/mail/mail.service");
const check_can_login_DTO_1 = require("./DTO/check-can-login.DTO");
let AuthController = class AuthController {
    constructor(authService, userService, mailService) {
        this.authService = authService;
        this.userService = userService;
        this.mailService = mailService;
    }
    async canLogin(body) {
        const user = await this.userService.getByWalletAddress(body.walletAddress);
        if (!user.count || user[0].email === body.email) {
            return {
                code: 200,
                message: 'Can login',
                data: true,
            };
        }
        return {
            code: 200,
            message: 'Can not login',
            data: false,
        };
    }
    async register(body) {
        try {
            await aws_amplify_1.Auth.signUp(body.email, body.password);
            return {
                code: common_1.HttpStatus.CREATED,
                message: 'User created',
            };
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async login(body) {
        try {
            const response = await aws_amplify_1.Auth.signIn(body.email, body.password);
            return {
                code: common_1.HttpStatus.OK,
                accessToken: response.signInUserSession.accessToken.jwtToken,
            };
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
};
__decorate([
    (0, common_1.Post)('/canLogin'),
    (0, common_1.UsePipes)(new validation_pipe_1.ValidationPipe()),
    (0, jwt_auth_guard_1.Public)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [check_can_login_DTO_1.CheckCanLoginDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "canLogin", null);
__decorate([
    (0, common_1.Post)('/register'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, jwt_auth_guard_1.Public)(),
    (0, common_1.UsePipes)(new validation_pipe_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.RegisterDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('/login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, jwt_auth_guard_1.Public)(),
    (0, common_1.UsePipes)(new validation_pipe_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        user_service_1.UserService,
        mail_service_1.MailService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map