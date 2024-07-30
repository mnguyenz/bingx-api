import { BaseResponse } from "~types/base.type";

export type QueryAssetsResponse = {
    data?: {
        balances: SingleQueryAssetResponse[];
    }
} & BaseResponse

export type SingleQueryAssetResponse = {
    asset: string
    free: number
    locked: number
}