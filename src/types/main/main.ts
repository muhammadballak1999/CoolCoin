import { IPaginationQuery } from '../common';
export interface IGameStatus {
    next_claim_time_second: number;
    next_roll_time_second: number;
    player_id: number;
    profit_per_hour: number;
    rolls_left: number;
    total_coins: number;
    collection_count: number;
}

export interface ICharacterQuery extends IPaginationQuery {
    name?: string;
}
export interface ICharacter {
    id: number;
    name: string;
    title: string;
    profit_per_hour: number;
    image_url: string;
    rank: number;
    roll_id: number;
    is_claimed: false;
    claimed_by_player_name?: string;
    time_left_seconds?: number;
    result?: 'ready' | 'claimed' | 'unclaimed';
}

export interface ISendCharacter {
    redeem_link: string;
}

export interface IClaimPayload {
    roll_id: number;
}

export interface ILoot {
character: ICharacter;    
claimed_by_player: number;
expires_at: string;
id: number
is_claimed: boolean;
player: number;
result: string;
rolled_at: string;
time_left_seconds: number; 

}