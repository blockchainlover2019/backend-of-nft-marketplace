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
exports.RedisService = void 0;
const ioredis_1 = require("@nestjs-modules/ioredis");
const common_1 = require("@nestjs/common");
const nanoid_1 = require("nanoid");
let RedisService = class RedisService {
    constructor(redis) {
        this.redis = redis;
    }
    getRedis() {
        return this.redis;
    }
    get(key) {
        return this.redis.get(key);
    }
    set(key, value) {
        return this.redis.set(key, value);
    }
    getWithPrefix(prefix, key) {
        return this.redis.get(prefix + ':' + key);
    }
    setWithPrefix(prefix, key, value) {
        return this.redis.set(prefix + ':' + key, value, 'EX', 5 * 60);
    }
    delWithPrefix(...prefix) {
        return prefix.map((pre) => {
            this.redis.scan('0', 'MATCH', pre + ':' + '*', (err, reply) => {
                if (err) {
                    throw err;
                }
                const keys = reply[1];
                return keys.map((key) => this.redis.del(key));
            });
        });
    }
    async hmset(payload, target) {
        const id = (0, nanoid_1.nanoid)();
        const data = Object.assign(Object.assign({}, payload), { isSync: false });
        await this.redis.hmset(`item:${id}`, data);
        await this.redis.lpush(target, `item:${id}`);
        return data;
    }
    async getAll(target) {
        const keys = await this.redis.lrange(target, 0, -1);
        const p = this.redis.pipeline();
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            p.hgetall(key);
        }
        const [error, data] = await p.exec();
        if (error) {
            throw error;
        }
        return data;
    }
    async setOtpForgotPassword(otp, email) {
        return await this.redis.set(`key-${email}`, otp, 'ex', 300);
    }
    async getOtpForgotPassword(email) {
        const otp = await this.redis.get(`key-${email}`);
        return otp;
    }
};
RedisService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, ioredis_1.InjectRedis)()),
    __metadata("design:paramtypes", [Object])
], RedisService);
exports.RedisService = RedisService;
//# sourceMappingURL=redis.service.js.map