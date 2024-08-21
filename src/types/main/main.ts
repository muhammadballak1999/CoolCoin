import { IPaginationQuery } from '../common';
export interface IGameStatus {
    next_claim_time_second: number;
    player_id: number;
    profit_per_hour: number;
    rolls_left: 0;
    total_coins: 0;
}

export interface ICharacterQuery extends IPaginationQuery {
    name?: string;
}
export interface ICharacter {
    id: number;
    name: string;
    title: string;
    image_url: string;
    rank: number;
    is_claimed: false;
}

