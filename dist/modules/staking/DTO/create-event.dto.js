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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEventDTO = exports.CreateEventDTO = exports.UpdateTicketDTO = exports.TicketDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const staking_interface_1 = require("../staking.interface");
class TicketDTO {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TicketDTO.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(staking_interface_1.ETicketType),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", typeof (_a = typeof staking_interface_1.ETicketType !== "undefined" && staking_interface_1.ETicketType) === "function" ? _a : Object)
], TicketDTO.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], TicketDTO.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], TicketDTO.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], TicketDTO.prototype, "saleStart", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], TicketDTO.prototype, "saleEnd", void 0);
exports.TicketDTO = TicketDTO;
class UpdateTicketDTO extends TicketDTO {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateTicketDTO.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], UpdateTicketDTO.prototype, "sold", void 0);
exports.UpdateTicketDTO = UpdateTicketDTO;
class CreateEventDTO {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateEventDTO.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateEventDTO.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], CreateEventDTO.prototype, "startDate", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], CreateEventDTO.prototype, "endDate", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(staking_interface_1.EEventType),
    (0, swagger_1.ApiProperty)({ enum: staking_interface_1.EEventType }),
    __metadata("design:type", typeof (_b = typeof staking_interface_1.EEventType !== "undefined" && staking_interface_1.EEventType) === "function" ? _b : Object)
], CreateEventDTO.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateEventDTO.prototype, "location", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], CreateEventDTO.prototype, "publishDate", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Type)(() => TicketDTO),
    __metadata("design:type", TicketDTO)
], CreateEventDTO.prototype, "ticket", void 0);
exports.CreateEventDTO = CreateEventDTO;
class UpdateEventDTO extends CreateEventDTO {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateEventDTO.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateEventDTO.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], UpdateEventDTO.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Type)(() => UpdateTicketDTO),
    __metadata("design:type", UpdateTicketDTO)
], UpdateEventDTO.prototype, "ticket", void 0);
exports.UpdateEventDTO = UpdateEventDTO;
//# sourceMappingURL=create-event.dto.js.map