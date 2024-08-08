import { AssetTransferTypeEnum } from '~enums';
import { BaseResponse } from '~helpers/base.type';

// 1.
export type QueryAssetsResponse = {
    data?: {
        balances: SingleQueryAssetResponse[];
    };
} & BaseResponse;

export type SingleQueryAssetResponse = {
    asset: string;
    free: number;
    locked: number;
};

// 3.
export type AssetTransferRecordsResponse = {
    total: number;
    rows: SingleAssetTransferRecordResponse[];
};

export type SingleAssetTransferRecordResponse = {
    asset: string;
    amount: number;
    type: AssetTransferTypeEnum;
    status: string;
    tranId: number;
    timestamp: number;
};
