import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { PlayerService } from './player.service';
import { IPlayer } from './player.interface';
import { Player } from './player.entity';

@Controller('player')
export class PlayerController {
  constructor(private playerService: PlayerService) {}

  @Get()
  async findAll(): Promise<Player[]> {
    return await this.playerService.findAll();
  }

  @Get()
  async findBy(@Param('id') id: number): Promise<Player> {
    return await this.playerService.findById(id);
  }

  @Post()
  async create(@Body('player') player: IPlayer): Promise<Player> {
    return await this.playerService.create(player);
  }

  @Put()
  async update(@Param('id') id: number, @Body('player') player: IPlayer) {
    return await this.playerService.update(id, player);
  }

  @Patch()
  async replace(
    @Param('id') id: number,
    @Body('player') player: IPlayer,
  ): Promise<any> {
    return await this.playerService.update(id, player);
  }

  @Delete()
  delete(@Param('id') id: number): any {
    return this.playerService.delete(id);
  }
}
