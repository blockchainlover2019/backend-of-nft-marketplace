"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_dynamoose_1 = require("nestjs-dynamoose");
const chat_controller_1 = require("./chat.controller");
const chat_schema_1 = require("./chat.schema");
const chat_service_1 = require("./chat.service");
let ChatModule = class ChatModule {
};
ChatModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_dynamoose_1.DynamooseModule.forFeature([
                {
                    name: 'Chat',
                    schema: chat_schema_1.ChatSchema,
                },
            ]),
        ],
        providers: [chat_service_1.ChatService],
        exports: [chat_service_1.ChatService],
        controllers: [chat_controller_1.ChatController],
    })
], ChatModule);
exports.ChatModule = ChatModule;
//# sourceMappingURL=chat.module.js.map