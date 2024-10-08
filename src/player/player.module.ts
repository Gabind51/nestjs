import { Module } from '@nestjs/common';
import { PlayerController } from './player.controller';
import { PlayerService } from './player.service';
import { DatabaseModule } from 'src/database/database.module';
import { playerProviders } from './player.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [PlayerController],
  providers: [PlayerService, ...playerProviders],
})
export class PlayerModule {}
