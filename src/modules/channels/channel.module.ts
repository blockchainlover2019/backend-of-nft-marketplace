import { Module } from '@nestjs/common';
import { DynamooseModule } from 'nestjs-dynamoose';
import { RedisModule } from '../redis/redis.module';
import { UserModule } from '../user/user.module';
import { SupportController } from './channel.controller';
import { ChannelSchema } from './channel.schema';
import { ChannelService } from './channel.service';
@Module({
  imports: [
    DynamooseModule.forFeature([
      {
        name: 'Channels',
        schema: ChannelSchema,
      },
    ]),
    UserModule,
    RedisModule,
  ],
  providers: [ChannelService],
  exports: [ChannelService],
  controllers: [SupportController],
})
export class ChannelModule {}
