import { Inject, Injectable } from '@nestjs/common';
import { Player } from './player.entity';
import { IPlayer } from './player.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PlayerService {
  constructor(
    @Inject('PLAYER_REPOSITORY') private playerRepository: typeof Player,
  ) {}

  async findAll(): Promise<Player[]> {
    return this.playerRepository.findAll();
  }

  async findById(id: number): Promise<Player> {
    console.log(id);
    return await this.playerRepository.findOne<Player>({ where: { id: id } });
  }

  async create(player: IPlayer): Promise<Player> {
    return await this.playerRepository.create<Player>({
      ...player,
      password: bcrypt.hashSync(player.password, 10),
    });
  }

  async update(id: number, updateData: Partial<Player>) {
    return await this.playerRepository.update(updateData, {
      where: { id: id },
    });
  }

  async replace(id: number, updateData: Partial<Player>) {
    return await this.playerRepository.update(updateData, {
      where: { id: id },
    });
  }

  async delete(id: number) {
    return await this.playerRepository.destroy({ where: { id: id } });
  }
}
